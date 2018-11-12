import mongoose from "mongoose";

const franchiseSchema = new mongoose.Schema({
  title: String,
  movies: Array,
  characters: Array
},
{
  timestamps: true
});

module.exports = mongoose.model("franchise", franchiseSchema);