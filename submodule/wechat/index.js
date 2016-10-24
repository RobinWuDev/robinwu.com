/**
 * Created by Robin on 2016/10/12.
 */
const Express = require('express');
const app = Express();
const wechat = require('wechat');
const MingYan = require('../api/model/mingyan');
const Music = require('../api/model/music');
const mingYan = new MingYan();
const music = new Music();

const config = {
    token: '',
    appid: '',
    encodingAESKey: ''
};

function replyRrror(code,res) {
    res.reply("发生错误,请连接管理员wjhlrt");
}

app.use(Express.query());
app.use('/',wechat(config,function (req,res,next) {
    let rand = Math.floor(Math.random()*2);
    switch(rand) {
        case 0: {
            mingYan.rand(function (code, data) {
                if(code == 0) {
                    let content = data.content + "\n----" + data.author;
                    res.reply(content);
                } else {
                    replyRrror(code);
                }
            });
            break;
        }
        case 1: {
            music.rand(function (code, data) {
                if(code == 0) {
                    var singer = "未知";
                    if(data.singer.length  > 0) {
                        singer = data.singer;
                    }
                    res.reply({
                        type: "music",
                        content: {
                            title: data.name,
                            description: "歌手:" + singer,
                            musicUrl: data.url,
                            hqMusicUrl: data.url
                        }
                    });
                } else {
                    replyRrror(code);
                }
            });
        }
    }
}));

module.exports = app;