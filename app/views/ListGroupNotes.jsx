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
                   
                        a.push(<div> <input type="checkbox" id={bodyItem} name={bodyItem} /> <label for={bodyItem}>{bodyItem}</label> </div>);
                    });
            } else {
                            a.push(<p>{note.body}</p>);
                        }
            div.push(<a className='editPost list-group-item w-25 m-3 ' href={"/posts/" + `${note._id}`}> {a} </a>);
                    }
            
                    return div
                }
            
    render() {
        return (
            <body>
                            <div className='editPost list-group flex-row flex-wrap align-items-start w-100 ml-auto mr-auto'>
                                {this.createAddedGroupNotes()}
                            </div>

                        </body>



                        )
                    }
                }
                
module.exports = ListGroupNotes;