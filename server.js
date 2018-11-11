/* Node Dependencies */
const fs = require("fs");
const url = require("url");
const path = require("path");

/* External Dependencies */
const chalk = require("chalk");
const express = require("express");
const favicon = require("serve-favicon");

/* Local Dependencies */

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

server.listen(process.env.PORT || 3000, () => {
  console.log(chalk.bgBlackBright.white(` Express Server started: ${process.env.APPNAME} `));
  console.log(chalk.bgBlackBright.white(` Listening on port ${process.env.PORT} `));
});