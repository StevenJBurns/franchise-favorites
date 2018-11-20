const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");


const userAccountSchema = new mongoose.Schema({
  userEmail: { type: String, required: true },
  password: { type: String, required: true },
  favorites: { type: Array}
}, { collection: 'userAccounts' });


module.exports = userAccountModel = mongoose.model("userAccounts", userAccountSchema);