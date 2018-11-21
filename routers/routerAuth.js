/* Create an auth specific router via Exoress */
const routerAuth = require("express").Router();

/* */
const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const userAccountModel = require("../models/userAccountModel.js");
const SALT = 10;


routerAuth.post("/register", async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) res.status(400).json({"400": "email and password are required"});

  try {
    let user = await userAccountModel.findOne({ userEmail: email }, (err, user) => {
      /* Send 500 error back if Mongo/Mongoose don't play nicely */
      if (err) res.status(500).json({"500": "Server Error"});
    });
  
    console.log(user);
    
    /* Send 400 error back if the email already exists on mLab */
    if (user) throw new Error("That user already exists");
  } catch (err) {
    console.error(err);
    return res.status(400).json({"400": "That user already exists"});
    //res.status(500).json({"500": "Server Error"});
  }

  /* create a new user based on req.body and hash the password then save to mLab */
  let newUser;

  try {
    let hashedPassword = await new Promise((resolve, reject) => {
      bcryptjs.hash(password, SALT, (err, hash) => err ? reject(err) : resolve(hash));
    });
    
    newUser = new userAccountModel({
      "userEmail": email,
      "password": hashedPassword
    });

    await newUser.save();

    res.status(201).json({"userEmail": newUser["email"], "favorites": newUser["favorites"]})  
  } catch (err) {
    console.error(err);
    res.status(500).json({"500": "Server Error"});
  }
});

routerAuth.post("/login", async (req, res, next) => {
  const { email, password } = req.body;

  let user;

  try {
    user = await userAccountModel.findOne({ userEmail: email }, (err, u) => {
      /* Send 500 error back if Mongo/Mongoose don't play nicely */
      if (err) res.status(500).send("500: Server Error");
      
      if (!u) throw new Error("400: email not found");
    });
  } catch (err) {
    // console.error(err);
    return res.status(400).send("email not found");
  }

  try {
    bcryptjs.compare(password, user["password"], (err, match) => {
      if (err) return res.status(500).send();

      console.log("match: ", match);
      
      if (match) {
        res.status(200).json({ "200: user found": user["userEmail"] });
      } else {
        throw new Error("400: bad password");
      }
    });
  } catch (err) {
    // console.error(err);
    return res.status(400).send("400: bad password");
  }
});

module.exports = routerAuth;
