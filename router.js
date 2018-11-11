const router = require("express").Router();
const routerAPI = require("./routerAPI");

router.use("/api", routerAPI);

router.get("/", (req, res) => {
    res.send("Root");
})

module.exports = router;