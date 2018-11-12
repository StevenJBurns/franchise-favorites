/* Node Dependencies */
const path = require("path");

/* External Dependencies */
const chalk = require("chalk");
const express = require("express");
const favicon = require("serve-favicon");
const mongoose = require("mongoose");
const logger = require("morgan");

/* Local Dependencies */
let router = require("./router.js");

/* Connect .env file values to Node process.env */
require("dotenv").config();

/* Clear the console and create the Express server */
const server = new express();
console.clear();

/* connect to MongoDB via mongoose */
mongoose.connect('mongodb://localhost:27017/franchise-favorites', { useNewUrlParser: true }, () => {
  console.log(chalk.bgWhite.black(`            Connected to DB            `))
});

/* serve-favicon Middleware */
server.use(favicon(path.join(__dirname, "public", "favicon.ico")));

/* Routing Middleware */
server.use("/", router);


server.listen(process.env.PORT || 3000, () =>
  console.log(chalk.bgWhite.black(`  Express Server Started on Port ${process.env.PORT}  `))
);