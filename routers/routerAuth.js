/* Create an auth specific router via Exoress */
const routerAuth = require("express").Router();

/* */
const bcryptjs = require("bcryptjs");
const UserAccount = require("../models/userAccountModel.js");
const SALT = 10;


routerAuth.post("/register", async (req, res, next) => {
  const { email, password } = req.body;
    
  if (!email || !password) throw new Error("email and password are required");

  let exisitngUser = await UserAccount.findOne({ "userEmail": email });

  /* Send 400 error back if the email already exists on mLab */
  if (exisitngUser) return res.status(400).send("That user already exists");

  /* hash the password and create a new user with req.body.email and the hashed password */
  let hashedPassword = await bcryptjs.hash(password, SALT); 

  let newUser = new UserAccount({
    "userEmail": email,
    "password": hashedPassword
  });

  /* assuming hashing finished correctly, save newUser to mLab via Mongoose */ 
  let savedUser = await newUser.save();
  
  /* Fire off a 201 response to the client with the savedUser object minus the password property */
  delete savedUser["password"];
  res.status(201).json(savedUser);
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
