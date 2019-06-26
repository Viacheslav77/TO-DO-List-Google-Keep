const ObjectID = require('mongodb').ObjectID

module.exports = function(app, db) {
    app.get('/readOne', (req, res) => {

        db.collection('postList').findOne({title: 'Title'}, (err, result) => {
            if (err) console.log(err)

            console.log(result)
            res.send(result)
        })
    })
}
