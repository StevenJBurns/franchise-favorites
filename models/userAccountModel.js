import mongoose from 'mongoose';

const userAccountSchema = new mongoose.Schema({
  userEmail: { type: String, required: true },
  password: { type: String, required: true },
  favorites: { type: Object }
},
{
  collection: 'userAccounts'
});

export const UserAccount = mongoose.model("userAccounts", userAccountSchema);
