module.exports = function (app, db) {
    app.delete('/deleteAll', async (request, response) => {
        const result = await db.collection('postList').deleteMany({title:'Title'}, (err, result) => {
            console.log('No posts in DB')
            response.send(result)
        })
    })
}