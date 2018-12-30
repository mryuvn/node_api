var express = require("express");
var config = require("config");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
    next();
});

var controllers = require(__dirname + "/apps/controllers");

app.use(controllers);

var host = config.get("server.host");
var port = config.get("server.port");
app.listen(port, host, function () {
    console.log("Serve is listening in PORT ", port);
});