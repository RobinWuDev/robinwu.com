/**
 * Created by Robin on 2016/10/12.
 */
var Express = require('express');
var app = Express();

app.get('/*', function(req, res) {
    res.send('Api');
});

module.exports = app;