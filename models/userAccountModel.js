const mongoose = require("mongoose");

const userAccountSchema = new mongoose.Schema({
  userEmail: { type: String, required: true },
  password: { type: String, required: true },
  favorites: { type: Object }
},
{
  collection: 'userAccounts'
});

module.exports = UserAccount = mongoose.model("userAccounts", userAccountSchema);
