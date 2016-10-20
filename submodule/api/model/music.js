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

module.exports = MusicModel;