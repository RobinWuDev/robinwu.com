var Express = require('express');
var vhost = require('vhost');

var app = Express();
var blog = require('./submodule/blog');
var api = require('./submodule/api');
var music = require('./submodule/music');
var wechat = require('./submodule/wechat');

app.use(vhost("blog.robinwu1.com",blog));
app.use(vhost("api.robinwu1.com",api));
app.use(vhost("music.robinwu1.com",music));
app.use(vhost("wechat.robinwu1.com",wechat));

// app.listen(80);
module.exports = app;
