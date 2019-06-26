// const objectId = require("mongodb").ObjectID;

module.exports.allLists = (db, cb) => {
    db.collection('postList').find().toArray((err,docs) => {
        cb(err,docs);
    });     
}