/* Node Dependencies */
const path = require("path");

/* External Dependencies */
const chalk = require("chalk");
const express = require("express");
const favicon = require("serve-favicon");
const mongoose = require("mongoose");
const logger = require("morgan");

/* Local Dependencies */
let routerAPI = require("./routers/routerAPI.js");
let routerAuth = require("./routers/routerAuth.js");


/* Connect .env file values to Node process.env */
require("dotenv").config();

/* Clear the console and create the Express server */
const server = new express();
console.clear();

/* Morgan Middleware for logging */
server.use(logger("dev"));

/* Express 4.16 now has native middleware for req.body without body-parser */
server.use(express.json());

/* connect to MongoDB via mongoose */
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() => console.log(chalk.bgWhite.black(`        Connected to MongoDB           `)))
  .catch(err => console.log(err));

/* serve-favicon Middleware */
server.use(favicon(path.join(__dirname, "public", "favicon.ico")));

/* Routing Middleware to catch the index.html request and serve up the React client */
server.use("/", express.static(path.join(__dirname, "client", "build")));

/* Routing Middleware to catch requests for static assets */
server.use("/public", express.static(path.join(__dirname, "public")));

/* Routers to catch /auth and /api routes */
server.use("/api", routerAPI);
server.use("/auth", routerAuth);

/* Catch-All middleware routing that serves up React client for non-API URLs vs a 404 error */
server.get("*", (req, res) => res.sendFile(path.join(__dirname, "client", "build", "index.html")));

/* Final Express error handler */
server.use((err, req, res, next) => {
  console.log("catch-all: ", err);
  res.json({err});
});

/* Start the Express server */ 
server.listen(process.env.PORT || 8000, () =>
  console.log(chalk.bgWhite.black(`  Express Server Started on Port ${process.env.PORT}  `))
);