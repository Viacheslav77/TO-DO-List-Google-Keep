const React = require('react');
const Layout = require('../views/layout');
const LayoutFooter = require('./layoutFooter');
const InputForm = require('../views/inputForm');

class AddNewListsNote extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <html lang="en">
                <Layout />
                <body>
                    <div className="container-fluid ">   
                        <div className="container p-3 mt-3 border rounded bg-light shadow">
                            <form name="postForm" class='postForm'>
                                
                                <input type="hidden" name="id-note" value="0" />
                                <input type="hidden" name="type-note" value="list" />
                                <div className="container" >   
                                    <input className="form-control form-control-lg border border-light mb-1" type="text" autocomplete="off" name="postName" placeholder="Title" required />
                                        <ul className="form-group text-center list-unstyled" id ="listItems">
                                            <li> <input className="form-control border border-light mb-1 new-item" type="text"  autocomplete="off" name="postBody" placeholder="+ New list item" id ="new-item" required /> </li>                                  
                                        </ul>                                                                                                                  
                                    </div>
                                <div className="panel-body text-center">
                                    <button  type="submit" id="save-form" className="btn btn-sm btn-primary m-2">save</button>
                                    <button id="reset" className="btn btn-sm btn-primary m-2">cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <LayoutFooter />

                </body>
            </html>

        )
    }
}

module.exports = AddNewListsNote;