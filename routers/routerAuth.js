/* Create an auth specific router via Exoress */
const routerAuth = require("express").Router();

/* */
const mongoose = require("mongoose");
const userAccountModel = require("../models/userAccountModel.js");


routerAuth.post("/login", (req, res) => {
  // console.log("body: ", req.body);
  const { email, password } = req.body;

  userAccountModel.findOne({ email }, (err, user) => {
    return user ? res.status(201).json({ "user found": email }) : res.status(400).send("email not found");
  })

  console.log("login: ", email, password);
  //res.status(201).send({ email, password });
});

routerAuth.post("/register", (req, res) => {
  const { email, password } = req.body;

  userAccountModel.findOne({ email }, (err, user) => {
    /* Check if the new email already exists on mLab */
    if (user) return res.status(400).json({ "error": 'That user already exisits!' });

    /* create a new user based on the body and model and save to mLab */
    let newUser = new userAccountModel({
      "email": email,
      "password": password
    });
  
    newUser.save()
      .then(user => res.status(201).json({"email": user["email"], "favorites": user["favorites"]}))
      .catch(error => console.error(error));
  });
  }
);

module.exports = routerAuth;
