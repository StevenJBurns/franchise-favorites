/* Create a router via Exoress */
const routerAuth = require("express").Router();


routerAuth.post("/login", (req, res, next) => {
  const { email, password} = req.body;
  console.log(email, password);
  res.status(201).send({ email, password });
});

routerAuth.post("/register", (req, res, next) => {
  const { email, password } = req.body;
  console.log(email, password);
  res.status(201).send({ email, password });
});

module.exports = routerAuth;