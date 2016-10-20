/**
 * Created by Robin on 2016/10/18.
 */
const Express = require('express');
const router = Express.Router();
const Util = require('../util');
const util = new Util();
const Music = require('../model/music');
const music = new Music();

/**
 * 随机获取音乐
 */
router.get('/rand',function (req,res) {
    music.rand(function (code,resData) {
        var obj = util.resObj(code,resData);
        res.json(obj);
    });
});


module.exports = router;

