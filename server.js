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

/* Morgan Middleware for logging */
server.use(logger("dev"));

/* connect to MongoDB via mongoose */
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, () => {
  console.log(chalk.bgWhite.black(`           Connected to DB             `))
});

/* serve-favicon Middleware */
server.use(favicon(path.join(__dirname, "public", "favicon.ico")));

/* Routing Middleware */
server.use(express.static(path.join(__dirname, "client", "build")));

server.use("/", router);

server.get("*", (req, res) => res.sendFile(path.join(__dirname, "client", "build", "index.html")));

/* Start the Express server */ 
server.listen(process.env.PORT || 8000, () =>
  console.log(chalk.bgWhite.black(`  Express Server Started on Port ${process.env.PORT}  `))
);