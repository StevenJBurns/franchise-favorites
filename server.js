/* Node Dependencies */
const fs = require("fs");
const url = require("url");
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

/* Catch all incoming routes */
server.all("*", (req, res) => {
  console.log(req.url);
  res.send("HI");
});

server.listen(process.env.PORT || 3000, () =>
  console.log(chalk.bgWhite.black(`  Express Server Started on Port ${process.env.PORT}  `))
);