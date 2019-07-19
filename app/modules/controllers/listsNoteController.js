const listsNoteDb = require('../models/listsNoteMongoDb');
const objectId = require("mongodb").ObjectID;

module.exports = (db) => {
    
    // module.exports.createNewListsNote = (req, res) => {
    //     const result = {
    //         _id: 0
    //     };
    //     res.render('ListsNote', {result : result})
    // } 

    module.exports.editListsNote = async (req, res) => {
        const id = objectId(req.params.id);
        const result = await db.collection('postList').findOne({_id: id});
        
        res.render('ListsNote', {result : result});
      
    }
    module.exports.createNewListsNote = async (req, res) => {
        if (!req.body) return res.status(400);
        let title = req.body.title;
        let body = req.body.body;
        let typeNote = req.body.typeNote;
        let post = { typeNote: typeNote, title: title, body: body };

        await db.collection('postList').insertOne(post, (err, result) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            }
            res.send(result);
            
        })
    };

    module.exports.deliteNote = async (req, res) => {
        const id = objectId(req.params.id);
        await db.collection('postList').findOneAndDelete({ _id: id }, (err, result) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            }
            res.send(result);
        })
    }

    module.exports.editNote = async (req, res) => {
        if (!req.body) return res.status(400);
        let id = objectId(req.body.id);
        let title = req.body.title;
        let body = req.body.body;
        let typeNote = req.body.typeNote;

        await db.collection('postList').findOneAndUpdate({ _id: id }, { $set: { title: title, body: body, typeNote: typeNote } },
            { returnOriginal: false }, (err, result) => {
                if (err) console.log(err);
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

