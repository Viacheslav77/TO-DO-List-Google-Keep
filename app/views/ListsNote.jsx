const React = require('react');
const Layout = require('./Layout');
const LayoutFooter = require('./layoutFooter');
const InputForm = require('./inputForm');

class ListsNote extends React.Component {
    constructor(props) {
        super(props);

        if (this.props.result === undefined) {
            this.id = 0;
            this.title = '';
            this.body = [];
        } else {
            this.id = this.props.result._id;
            this.title = this.props.result.title;
            this.body = this.props.result.body;
        }

    }

    createItems() {
        let ul = [];

        if (this.body.length == 0) {
            let li = <li><input className ="form-control border border-light mb-1 new-item" id="new-item" type="text" autocomplete="off" name="postBody" placeholder="+ New list item" required /> </li>;
            ul.push(li);
            return ul;
        }else {
            for(let item of this.body){
                ul.push(<li><input className ="form-control border border-light mb-1 " type="text" autocomplete="off" name="postBody" placeholder="+ New list item" value={`${item}`} required /> </li>);
            }
            return ul;
        }

    };

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
                                    <input className="form-control form-control-lg border border-light mb-1" type="text" autocomplete="off" name="postName" placeholder="Title" value={`${this.title}`} required />
                                    <ul className="form-group text-center list-unstyled" id="listItems">
                                        {this.createItems()}
                                    </ul>
                                </div>
                                <div className="panel-body text-center">
                                    <button type="submit" id="save-form" className="btn btn-sm btn-primary m-2">save</button>
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

module.exports = ListsNote;