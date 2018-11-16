/* Create a router via Exoress */
const routerAPI = require("express").Router();

const franchiseModel = require("../models/franchiseModel");
const userAccountModel = require("../models/userAccountModel");


routerAPI.get("/franchises", (req, res) => {
  franchiseModel.find()
    .then(franchises => res.json(franchises));
});

routerAPI.get("/userAccounts", (req, res) => {
  userAccountModel.find()
    .then(userAccounts => res.json(userAccounts));
});

module.exports = routerAPI;