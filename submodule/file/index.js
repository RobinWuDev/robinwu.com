/**
 * Created by Robin on 2016/10/20.
 */
var Express = require('express');
var app = Express();

app.use(Express.static(__dirname + '/public'));

module.exports = app;
