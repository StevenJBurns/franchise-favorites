/* Node Dependencies */
const path = require("path");

/* External Dependencies */
const chalk = require("chalk");
const express = require("express");
const favicon = require("serve-favicon");

/* Local Dependencies */
let router = require("./router.js");

/* Connect .env file values to Node process.env */
require("dotenv").config();

/* Clear the console and create the Express server */
const server = new express();
console.clear();

/* serve-favicon Middleware */
server.use(favicon(path.join(__dirname, "public", "favicon.ico")));

/* Routing Middleware */
server.use("/", router);


server.listen(process.env.PORT || 3000, () =>
  console.log(chalk.bgWhite.black(`  Express Server Started on Port ${process.env.PORT}  `))
);