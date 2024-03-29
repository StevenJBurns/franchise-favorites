import { Router } from 'express';
import { Franchise } from '../models/franchiseModel.js';
import { UserAccount } from '../models/userAccountModel.js';
 
/* Create a router via Exoress */
export const routerAPI = Router();

/* Import Mongo data models to use in API routes */
// const Franchise = require("../models/franchiseModel.js");
// const UserAccount = require("../models/userAccountModel.js");


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
