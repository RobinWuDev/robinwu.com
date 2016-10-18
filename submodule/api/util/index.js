/**
 * Created by Robin on 2016/10/18.
 */

function Util() {

}

Util.prototype.resObj = function(code,data) {
    var obj = {'rescode':code,'data':data};
    return obj;
}

module.exports = Util;
