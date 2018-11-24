const mongoose = require("mongoose");

const userAccountSchema = new mongoose.Schema({
  userEmail: { type: String, required: true },
  password: { type: String, required: true },
  favorites: { type: Array },
  characters: { type: Array }
},
{
  collection: 'userAccounts'
});

module.exports = UserAccount = mongoose.model("userAccounts", userAccountSchema);
