/**
 * Created by Robin on 2016/10/12.
 */
var Express = require('express');
var app = Express();

const mingyan = require('./routers/mingyan');

app.use('/mingyan',mingyan);

module.exports = app;