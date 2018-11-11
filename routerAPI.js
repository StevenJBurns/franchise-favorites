const routerAPI = require("express").Router();

routerAPI.get("/", (req, res) => res.send("API"));

module.exports = routerAPI;