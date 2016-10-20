/**
 * Created by Robin on 2016/10/12.
 */
var Express = require('express');
var app = Express();

const mingyan = require('./routers/mingyan');
const music = require('./routers/music');

app.use('/mingyan',mingyan);
app.use('/music',music);

module.exports = app;