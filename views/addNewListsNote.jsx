const React = require('react');
const Layout = require('../views/layout');
const InputForm = require('../views/inputForm');

class AddNewListsNote extends React.Component {
    constructor(props) {
        super(props);
        let listsNote = [];
    }
    createListsNote(listsNote) {
        console.log(listsNote)
        if (listsNote === undefined) {return}
        
        let newLists = []

        // Outer loop to create parent
        let children = [];

        newLists.push(<h3>{listsNote.title}</h3>);
        newLists.push(<p>----------------</p>);

        for (let note of listsNote.lists) {
            console.log(note)
            newLists.push(<p>{note}</p>);

        }

        return newLists
    }



    render() {
        return (
            <html lang="en">
                <Layout />
                <body>
                    <div className="container">

                        <h2 className="text-center">Add new Lists note</h2>

                        <form name="postForm" class='postForm'>
                            <input type="hidden" name="id" value="0" />
                            <input type="hidden" name="type-note" value="list" />

                            {this.createListsNote(this.listsNote)}

                            <div className="form-group text-center">
                                <label htmlFor="postName">
                                    <input className="form-control" type="text" name="postName" placeholder="Title" required />
                                </label>
                            </div>
                            <div className="form-group text-center">
                                <label htmlFor="postBody">
                                    <textarea className="form-control" type="text" name="postBody" placeholder="Body" required />                                  
                                    <button id="next-item" className="btn btn-sm btn-primary" >+</button>
                                </label>
                                
                            </div>
                            <div className="panel-body text-center">
                                <button id="save" className="btn btn-sm btn-primary m-2">Save</button>
                                <button id="reset" className="btn btn-sm btn-primary m-2">Reset</button>
                            </div>
                        </form>
                    </div>
                    <script src="/script.js"></script>

                </body>
            </html>

        )
    }
}

module.exports = AddNewListsNote;