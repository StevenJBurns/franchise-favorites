const mongoose = require("mongoose");


const userAccountSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  favorites: { type: Array}
}, { collection: 'userAccounts' });

module.exports = userAccountModel = mongoose.model("userAccounts", userAccountSchema);