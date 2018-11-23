/* Create an auth specific router via Exoress */
const routerAuth = require("express").Router();

/* bcrypt and JWT external dependencies */
const SALT = 10;
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

/* Local Dependencies */
const UserAccount = require("../models/userAccountModel.js");


const SECRET = process.env.SECRET_KEY;

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

  let exisitingUser = await UserAccount.findOne({ userEmail: email });
    
  if (!exisitingUser) return res.status(400).json({ "error": "email not found"});

  let passwordsMatch = await bcryptjs.compare(password, exisitingUser["password"]);
  
  if (!passwordsMatch) return res.status(403).json({ "message": "bad password" });

  const token = await jwt.sign({ _id: exisitingUser["user._id"] }, process.env.SECRET_KEY, { expiresIn: 60000});

  console.log(token);
  
  return res.status(200).send({"token": token});
});

module.exports = routerAuth;
