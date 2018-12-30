var express = require("express");

var app = express();
var controllers = require(__dirname + "/apps/controllers");

app.use(controllers);

app.listen(3300, function () {
    console.log("Serve is listening in PORT 3300");
});