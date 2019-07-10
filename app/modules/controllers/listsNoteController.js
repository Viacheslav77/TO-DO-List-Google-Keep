const listsNoteDb = require('../models/listsNoteMongoDb');

module.exports = (db) => {
    
    module.exports.createNewListsNote = (req, res) => {
        res.render('AddNewListsNote')
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

