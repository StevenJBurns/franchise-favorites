const mongoose = require("mongoose");


const userAccountSchema = new mongoose.Schema({
  _id: {type: String, required: true }
});

module.exports = useAccount = mongoose.model("userAccount", userAccountSchema);