var express = require("express");

var router = express.Router();

router.use("/home", require(__dirname + "/home"));

router.get("/", function (req, res) {
    res.json({"mess": "Welcome to Nodejs Application!"});    
});

module.exports = router;