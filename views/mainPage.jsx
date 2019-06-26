const React = require('react');
const Layout = require('./layout');
const InputForm = require('./inputForm');
const TableToDoList = require('./tableToDoList');


class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <html lang="en">
                <Layout />
                <body>
                    <div class="container-fluid">
                        <h1 className="text-center m-3">Super Notes</h1>
                        <div class="row">
                            <div className="col text-center m-3" id="add-note">
                                <button type="button" class="btn-lg btn-primary fas fa-plus">
                                    <div className="m-2">Take note...</div>
                                </button>
                            </div>
                            <div className="col text-center m-3" id="add-lists-note">
                                <button type="button" class="btn-lg btn-primary fas fa-plus">
                                    <div className="m-2">Take note with list...</div>
                                </button>
                            </div>

                        </div>

                        <h2 className="text-center m-2">Added notes</h2>

                        <TableToDoList result={this.props.result} />

                    </div>
                    <script src="/script.js"></script>
                </body>
            </html>
        )
    }
}

module.exports = MainPage;