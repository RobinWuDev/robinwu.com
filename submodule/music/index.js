/**
 * Created by Robin on 2016/10/12.
 */
var ejs = require('ejs');

var Express = require('express');
var app = Express();


app.get("/",function (req, res) {
    var domain = "";
    if(process.env.NODE_ENV  == "dev") {
        domain = "http://file.robinwu1.com:3000";
    } else {
        domain = "http://file.robinwu.com";
    }
    res.render("index.ejs",{domain:domain});
})

module.exports = app;