/**
 * Created by Robin on 2016/10/12.
 */
const Express = require('express');
const app = Express();
const WeChat = require('wechat');

const config = {
    token: 'token',
    appid: 'appid',
    encodingAESKey: 'encodinAESKey'
};

const webChat = new WeChat(config,function (req, res, next) {
    var message = req.weixin;
    if(message.msgType == "text") {
        res.reply("hehe");
    }
});


app.get('/',webChat);

module.exports = app;