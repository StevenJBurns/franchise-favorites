const mongoose = require("mongoose");


const franchiseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  imageURL: { type: String},
  movies: { type: Array, required: true },
  characters: { type: Array }
});

module.exports = franchiseModel = mongoose.model("franchise", franchiseSchema);