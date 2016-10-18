/**
 * Created by Robin on 2016/10/18.
 */
const Express = require('express');
const router = Express.Router();
const Util = require('../util');
const util = new Util();

const data = new Array([
    {'id':0,'content':"名言1",'author':"robinwu"},
    {'id':1,'content':"名言1",'author':"robinwu"},
    {'id':2,'content':"名言1",'author':"robinwu"},
    {'id':3,'content':"名言1",'author':"robinwu"},
    {'id':4,'content':"名言1",'author':"robinwu"},
    {'id':5,'content':"名言1",'author':"robinwu"},
    {'id':6,'content':"名言1",'author':"robinwu"},
    {'id':7,'content':"名言1",'author':"robinwu"},
    {'id':8,'content':"名言1",'author':"robinwu"},
    {'id':9,'content':"名言1",'author':"robinwu"},
    {'id':10,'content':"名言1",'author':"robinwu"}
]);

/**
 * 获取名言列表
 */
router.get('/list',function (req,res) {
    var obj = util.resObj(0,data);
    res.json(obj);
});

/**
 * 添加名言
 */
router.post('/add',function (req,res) {
    var content = req.query.content;
    var author = req.query.author;
    var addObj = {'id':data.length,'content':content,'author':author};
    data.push(addObj);
    var obj = util.resObj(0,addObj);
    res.json(obj);
});

/**
 * 删除名言
 */
router.delete('/del',function (req,res) {
    var id  = req.query.id;
    for(var i in data) {
        var temp = data[i];
        if(temp.id == id) {
            data.unshift(temp)
            break;
        }
    }
    var obj = util.resObj(0,"delete ok");
    res.json(obj);
});

/**
 * 更新名言
 */
router.get('/update',function () {
});

module.exports = router;

