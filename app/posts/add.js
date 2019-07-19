const objectId = require("mongodb").ObjectID;

module.exports = function (app, db) {
    // app.post('/posts', async (req, res) => {
    //     if (!req.body) return res.status(400);
    //     let title = req.body.title;
    //     let body = req.body.body;
    //     let typeNote = req.body.typeNote;
    //     let post = { typeNote: typeNote, title: title, body: body };

    //     await db.collection('postList').insertOne(post, (err, result) => {
    //         if (err) console.log(err);
    //         res.send(result);
    //         //db.close()
    //     })
    // })
    // app.put('/posts', async (req, res) => {
    //     if (!req.body) return res.status(400);
    //     let id = objectId(req.body.id);
    //     let title = req.body.title;
    //     let body = req.body.body;
    //     let typeNote = req.body.typeNote;

    //     await db.collection('postList').findOneAndUpdate({ _id: id }, { $set: { title: title, body: body, typeNote: typeNote } },
    //         { returnOriginal: false }, (err, result) => {
    //             if (err) console.log(err);
    //             res.send(result);
    //         })
    // })
    // app.delete('/posts/:id', async (req, res) => {
    //     const id = objectId(req.params.id);
    //     await db.collection('postList').findOneAndDelete({ _id: id }, (err, result) => {
    //         if (err) console.log(err);
    //         res.send(result);
    //     })
    // })
}
