const mongoose = require("mongoose");


const userAccountSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  favorites: { type: Array}
});

userAccountSchema.pre("save", (next) => {
  
});

module.exports = useAccountModel = mongoose.model("userAccountModel", userAccountSchema);