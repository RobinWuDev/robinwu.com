/**
 * Created by Robin on 2016/10/20.
 */
const db = require('./db').getDB();

const MUSIC_IDS = "rb_music_ids";
const MUSIC_COUNT = "rb_music_count";
const MUSIC_NAME = "rb_music:";



function MusicModel() {

}

MusicModel.prototype.rand = function (callBack) {
    let self = this;
    db.getConn().llen(MUSIC_IDS,function (err, len) {
        if(err) {
            callBack(-1,err);
            return;
        }
        let rand = Math.floor(Math.random()*len);
        db.getConn().lindex(MUSIC_IDS,rand,function (err, res) {
            if(err) {
                callBack(-1,err);
                return;
            }
            db.getConn().hgetall(res,function (err, res) {
                if(err) {
                    callBack(-1,err);
                    return;
                }
                callBack(0,res);
            });
        });
    });
}

MusicModel.prototype.add = function (name,type,callBack) {
    db.getConn().incr("rb_music_count",function (err,res) {
        let musicIdNumber = res;
        let albumName = "其他";
        let music_id = "rb_music:" + res;
        let url = "http://file.robinwu.com/music/" + res + type;

        db.getConn().hmset(music_id,"name",name,"singer","","album",albumName,"url",url,function (err, res) {
            if(!err) {
                db.getConn().rpush("rb_music_ids",music_id);
                db.getConn().rpush("rb_play_music",music_id);
                console.log("add ids success",music_id);
                callBack(musicIdNumber);
            } else {
                db.getConn().decr("rb_music_count");
                console.log("add ids faild",music_id);
                callBack(-1);
            }
        });
    });
}

module.exports = MusicModel;