var Express = require('express');
var vhost = require('vhost');
var fs = require('fs')
var morgan = require('morgan')
var path = require('path')
var accessLogStream = fs.createWriteStream(path.join(__dirname, '../access.log'), {flags: 'a'})


var app = Express();
var blog = require('./submodule/blog');
var api = require('./submodule/api');
var music = require('./submodule/music');
var wechat = require('./submodule/wechat');
var file = require('./submodule/wechat');

var domain = "robinwu.com";
if(process.env.NODE_ENV == "dev") {
    domain = "robinwu1.com";
}

app.use(morgan('combined',{stream: accessLogStream}));
app.use(Express.query());
app.use(vhost(domain,blog));
app.use(vhost("www." + domain,blog));
app.use(vhost("blog." + domain,blog));
app.use(vhost("api." + domain,api));
app.use(vhost("music." + domain,music));
app.use(vhost("wechat." + domain,wechat));
app.use(vhost("file." + domain,file));

if(process.env.NODE_ENV != "dev") {
    app.listen(80);
}
module.exports = app;
