const listsNoteDb = require('../models/listsNoteMongoDb');

module.exports = (db) => {
    
    module.exports.createNewListsNote = (req, res) => {
        const result = {
            _id: 0
        };
        res.render('ListsNote', {result : result})
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

