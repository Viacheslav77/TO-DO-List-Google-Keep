const AddPost = require('./app/posts/add');
const ReadOnePost = require('./app/posts/readOnePost');
const ReadAllPosts = require('./app/posts/main-page');
const DeleteAllPosts = require('./app/posts/delAllPosts');

const listsNoteController = require('./app/modules/controllers/listsNoteController');


module.exports = (app, db) => {
    AddPost(app, db);
    ReadOnePost(app, db);
    ReadAllPosts(app, db);
    DeleteAllPosts(app, db);

    listsNoteController(db);
    app.post('/lists', listsNoteController.createNewListsNote);
    app.get('/lists/:id', listsNoteController.editListsNote);
    app.put('/lists', listsNoteController.editNote);
    app.delete('/api/lists/:id', listsNoteController.deliteNote);



    





}
