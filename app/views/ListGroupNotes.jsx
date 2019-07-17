const React = require('react');


class ListGroupNotes extends React.Component {

    constructor(props) {
        super(props);
    }

    createAddedGroupNotes() {

        let div = [];
        for (let note of this.props.result) {
            let a = [];
            a.push(<h3>{note.title}</h3>);

            let body = '';
            if (note.typeNote == 'lists') {
                note.body.forEach(bodyItem => {
                    a.push(<p>{bodyItem}</p>);
                });
            } else {
                a.push(<p>{note.body}</p>);
            }
            div.push(<a className='editPost list-group-item w-25 m-3 'href= {"/posts/"+`${note._id}`} data-id={`${note._id}`}> {a} </a>);
        }

        // children.push(<td><a className="editPost" href= {"/posts/"+`${this.props.result[i]._id}`} data-id={`${this.props.result[i]._id}`}>Изменить</a> | <a className="removePost" href="#" data-id={`${this.props.result[i]._id}`}>Удалить</a></td>)
        // //Create the parent and add the children
        // table.push(<tr data-postid={`${this.props.result[i]._id}`}>{children}</tr>)

        return div
    }

    render() {
        return (
            <body>
                <div className = 'editPost list-group flex-row flex-wrap align-items-start w-100 ml-auto mr-auto'>               
                    {this.createAddedGroupNotes()}
                </div>
                
            </body>



        )
    }
}

module.exports = ListGroupNotes;