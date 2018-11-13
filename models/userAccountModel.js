const mongoose = require("mongoose");


const userAccountSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  email: { type: String, required: true },
  favorites: { type: Array}
});

module.exports = useAccountModel = mongoose.model("userAccountModel", userAccountSchema);