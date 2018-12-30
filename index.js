var express = require("express");

var app = express();
var controllers = require(__dirname + "/apps/controllers");

app.use(controllers);

app.listen(8080, function () {
    console.log("Serve is listening in PORT 8080");
});