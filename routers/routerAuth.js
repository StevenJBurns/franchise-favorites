/* Create an auth specific router via Exoress */
const routerAuth = require("express").Router();

/* */
const mongoose = require("mongoose");
const userAccountModel = require("../models/userAccountModel.js");


routerAuth.post("/login", (req, res) => {
  console.log("body: ", req.body);
  const { email, password } = req.body;
  console.log("login: ", email, password);
  res.status(201).send({ email, password });
});

routerAuth.post("/register", (req, res) => {
  const { email, password } = req.body;

  let newUser = new userAccountModel({
    "email": email,
    "password": password
  });

  console.log(newUser);

  newUser.save()
    .then(user => res.json({"email": user["email"], "favorites": user["favorites"]}))
    .catch(error => console.error(error));
  }
);

module.exports = routerAuth;
