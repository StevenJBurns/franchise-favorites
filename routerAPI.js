const express = require("express");
const routerAPI = require("express").Router();

const franchiseModel = require("./models/franchiseModel");
const userAccountModel = require("./models/userAccountModel");


routerAPI.get("/franchises", (req, res) => {
  franchiseModel.find()
    // .then(() => console.log("from the franchises end point"))
    .then(franchises => res.json(franchises));
});

routerAPI.get("/userAccounts", (req, res) => {
  userAccountModel.find()
    // .then(() => console.log("from the userAccounts end point"))
    .then(userAccounts => res.json(userAccounts));
});

routerAPI.post("/register", (req, res, next) => {
  const { email, password } = req.body;
  console.log(email, password);
  res.status(201).send({ email, password });
});

module.exports = routerAPI;