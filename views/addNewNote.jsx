const React = require('react');
const Layout = require('../views/layout');
const InputForm = require('../views/inputForm');


class AddNewNote extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <html lang="en">
                <Layout />
                <body>
                    <div className="container">
                        <h2 className="text-center">Add new note</h2>
                        <InputForm />
                    </div>
                    <script src="/script.js"></script>
                </body>
            </html>

        )
    }
}

module.exports = AddNewNote;