/* Create a router via Exoress */
const routerAPI = require("express").Router();

const Franchise = require("../models/franchiseModel");
const UserAccount = require("../models/userAccountModel");


routerAPI.get("/franchises", (req, res) => {
  Franchise.find()
    .then(franchises => res.json(franchises))
    .catch(err => console.error(err));
});

routerAPI.get("/userAccounts", (req, res) => {
  UserAccount.find()
    .then(users => res.json(users))
    .catch(err => console.error(err));
});

module.exports = routerAPI;