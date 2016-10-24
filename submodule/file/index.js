/**
 * Created by Robin on 2016/10/20.
 */
const Express = require('express');
const FS = require('fs');
const Path = require('path');
const Multer  = require('multer')
const upload = Multer({ dest: 'submodule/file/public/upload/' })

const Music = require('../api/model/music');
const music = new Music();

var app = Express();

app.use(Express.static(__dirname + '/public'));
app.post('/upload', upload.single('file'), function (req, res, next) {
    var type = req.body.type;
    if(type == "music") {
        var file = req.file;
        var extName = Path.extname(file.originalname);
        var name = file.originalname.replace(extName,"");
        music.add(name,extName,function (musicId) {
            if(musicId > 0) {
                var oldPath = file.path;
                var newPath = "submodule/file/public/music/" + musicId + extName;
                FS.rename(oldPath,newPath,function (err) {
                    if(!err) {
                        res.json({"code":0,"data":musicId});
                    } else {
                        res.json({"code":-1,"data":musicId});
                    }
                })
            } else {
                res.json({"code":-1,"data":""});
            }
        });
    } else {
        res.json({"code":-1,"data":""});
    }
})

module.exports = app;
