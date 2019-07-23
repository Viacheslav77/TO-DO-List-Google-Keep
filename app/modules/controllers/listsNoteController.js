const listsNoteDb = require('../models/listsNoteMongoDb');
const objectId = require("mongodb").ObjectID;


module.exports = (db) => {

    module.exports.getListsNote = async (req, res) => {
        const id = objectId(req.params.id);
        await db.collection(db.name).findOne({_id: id}, (err, result) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            }
            res.render('ListsNote', {result : result});
        }); 
    }
    module.exports.createNewListsNote = async (req, res) => {
        if (!req.body) return res.status(400);
        let title = req.body.title;
        let body = req.body.body;
        let typeNote = req.body.typeNote;
        let newNote = { typeNote: typeNote, title: title, body: body };

        await db.collection(db.name).insertOne(newNote, (err, result) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            }
            res.send(result);
            
        })
    };

    module.exports.deliteNote = async (req, res) => {
        const id = objectId(req.params.id);
        await db.collection(db.name).findOneAndDelete({ _id: id }, (err, result) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            }
            res.send(result);
        })
    }

    module.exports.updateListsNote = async (req, res) => {
        if (!req.body) return res.status(400);
        let id = objectId(req.body.id);
        let typeNote = req.body.typeNote;
        let title = req.body.title;
        let body = req.body.body;

        await db.collection(db.name).findOneAndUpdate({ _id: id }, { $set: { typeNote: typeNote,title: title, body: body } },
            { returnOriginal: false }, (err, result) => {
                if (err) {
                    console.log(err);
                    res.sendStatus(500);
                }
                res.send(result);
            })
    }
    
    module.exports.all = (req, res) => {
        listsNoteDb.allLists(db, function (err, docs) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            }
            res.render('MainPage', { result: docs });
        })
    } 
}

