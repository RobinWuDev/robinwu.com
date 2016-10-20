/**
 * Created by Robin on 2016/10/20.
 */
const db = require('./db').getDB();

const MINGYAN_IDS = "rb_mingyan_ids";
const MINGYAN_COUNT = "rb_mingyan_count";
const MINGYAN_NAME = "rb_mingyan:";



function MingYanModel() {
    
}

MingYanModel.prototype.rand = function (callBack) {
    let self = this;
    db.getConn().llen(MINGYAN_IDS,function (err, len) {
        if(err) {
            callBack(-1,err);
            return;
        }
        let rand = Math.floor(Math.random()*len);
        db.getConn().lindex(MINGYAN_IDS,rand,function (err, res) {
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

module.exports = MingYanModel;