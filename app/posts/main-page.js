const objectId = require("mongodb").ObjectID;

module.exports = function(app, db) {
    app.get('/', async (req, res) => {
        const result = await db.collection('postList').find().toArray();
        res.render('MainPage', {result : result});
    })
        .get('/addNewNote', async (req, res) => {
            res.render('AddNewNote')
        })


        .get('/posts/:id', async (req, res) => {
            const id = objectId(req.params.id);
            const result = await db.collection('postList').findOne({_id: id});
            
            res.render('ListsNote', {result : result});
          
            // res.send(result);
        })
        .get('/in-json', async (req, res) => {
            const result = await db.collection('postList').find().toArray();
            res.send(result);
        })
};
