/**
 * Created by Robin on 2016/10/20.
 */
const Redis = require('redis');

let db = null;

function DB() {
    this.connect = Redis.createClient('6379','127.0.0.1');
}

DB.prototype.getConn = function () {
    return this.connect;
}

function getDB() {
    if(!db) {
        db = new DB();
    }
    return db;
}

module.exports.getDB = getDB;