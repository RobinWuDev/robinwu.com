/**
 * Created by Robin on 2016/10/12.
 */
const Express = require('express');
const app = Express();
const wechat = require('wechat');

const config = {
    token: '',
    appid: '',
    encodingAESKey: ''
};

app.use(Express.query());
app.get('/',wechat(config,function (req,res,next) {
    var message = req.weixin;
    if(message.msgType == "text") {
        res.reply("hehe");
    }
}));

module.exports = app;