const mongoose = require("mongoose");

const franchiseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  imageURL: { type: String},
  movies: { type: Array, required: true },
  characters: { type: Array }
},
{
  collection: 'franchises'
});

module.exports = Franchise = mongoose.model("franchise", franchiseSchema);
