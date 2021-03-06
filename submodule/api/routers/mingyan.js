/**
 * Created by Robin on 2016/10/18.
 */
const Express = require('express');
const router = Express.Router();
const Util = require('../util');
const util = new Util();
const MingYan = require('../model/mingyan');
const mingYan = new MingYan();

/**
 * 随机获取名言
 */
router.get('/rand',function (req,res) {
    mingYan.rand(function (code,resData) {
        var obj = util.resObj(code,resData);
        res.json(obj);
    });
});


module.exports = router;

