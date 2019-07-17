const React = require('react');


class TableToDoList extends React.Component {

    constructor(props) {
        super(props);
    }

    createTable() {
        let table = []
        // Outer loop to create parent
        for (let i = 0; i < this.props.result.length; i++) {
            let children = [];
            let body = '';
            if (this.props.result[i].typeNote == 'lists') {
                this.props.result[i].body.forEach(element => {
                    body += element + '    ';
                });
            }else {
                body = this.props.result[i].body; 
            }

            children.push(<td>{this.props.result[i].title}</td>);
            children.push(<td>{body}</td>);
            children.push(<td><a className="editPost" href= {"/posts/"+`${this.props.result[i]._id}`} data-id={`${this.props.result[i]._id}`}>Изменить</a> | <a className="removePost" href="#" data-id={`${this.props.result[i]._id}`}>Удалить</a></td>)
            //Create the parent and add the children
            table.push(<tr data-postid={`${this.props.result[i]._id}`}>{children}</tr>)
        }
        return table
    }

    render() {
        return (
            <table className="table table-condensed table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Название</th>
                        <th>Содержание</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {this.createTable()}
                </tbody>
            </table>
        )
    }
}

module.exports = TableToDoList;