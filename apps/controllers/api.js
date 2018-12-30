var express = require("express");
var jsonParser = require("body-parser").json();
var router = express.Router();

var api_secur = require("../common/api_secur");
var db_model = require("../models/db_models");

router.get("/", function (req, res) {
    res.json({"mess": "This is APIs page"});
});

router.get("/get-data", (req, res) => {
    var secur_key = req.query.secur_key;
    if (secur_key) {
        if (secur_key == api_secur.secur) {
            var db = req.query.db;
            if (db) {
                if (req.query.fields) {
                    var fields = req.query.fields;
                } else {
                    var fields = '*';
                }
                if (req.query.where) {
                    var where = req.query.where;
                } else {
                    var where = '';
                }
                if (req.query.orderBy) {
                    var orderBy = req.query.orderBy;
                } else {
                    var orderBy = '';
                }
                db_model.getData(db, fields, where, orderBy)
                    .then(data => {
                        res.json({ "mess": "ok", "data": data });
                    })
                    .catch(err => res.json({ "mess": "fail", "err": err }));
            } else {
                res.json({ "mess": "fail", "err": "noDataTableSelected" });
            }
        } else {
            res.json({
                "mess": "fail",
                "err": "Security key is not right!"
            });
        }
    } else {
        res.json({
            "mess": "fail",
            "err": "No security key!"
        });
    }
});

module.exports = router;