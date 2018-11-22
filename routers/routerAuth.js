/* Create an auth specific router via Exoress */
const routerAuth = require("express").Router();

/* */
const bcryptjs = require("bcryptjs");
const UserAccount = require("../models/userAccountModel.js");
const SALT = 10;


routerAuth.post("/register", async (req, res, next) => {
  const { email, password } = req.body;
    
  if (!email || !password) throw new Error("email and password are required");

  /* Check for existing email in mLab; Send 400 error back if it already exists */
  let exisitngUser = await UserAccount.findOne({ "userEmail": email });
  if (exisitngUser) return res.status(400).json({"message": "That user already exists"});

  /* hash the password and create a new user with req.body.email and the hashed password */
  let hashedPassword = await bcryptjs.hash(password, SALT); 

  let newUser = new UserAccount({
    "userEmail": email,
    "password": hashedPassword
  });

  /* Save newUser to mLab via Mongoose and 201 with new userEmail */ 
  let { userEmail } = await newUser.save();
  res.status(201).json({"message": `created new user: ${userEmail}`});  
});

routerAuth.post("/login", async (req, res, next) => {
  const { email, password } = req.body;

  let exisitingUser = await userAccountModel.findOne({ userEmail: email });
    
  if (!exisitingUser) return res.status(400).json({ "error": "email not found"});

  let passwordsMatch = await bcryptjs.compare(password, user["password"]);
  
  return passwordsMatch ?
    res.status(200).json({ "message": `user found": ${user["userEmail"]}` }) :
    res.status(400).json({ "message": "bad password" });
});

module.exports = routerAuth;
