var express = require("express");

var router = express.Router();

router.use("/home", require(__dirname + "/home"));
router.use("/api", require(__dirname + "/api"));
router.use("/nodemailer", require(__dirname + "/nodemailer"));
router.use("/plugins", require(__dirname + "/plugins"));
router.use("/visa-orders", require(__dirname + "/visa_orders"));

router.get("/", function (req, res) {
    res.json({"mess": "Welcome to Nodejs Application!"});    
});

module.exports = router;