const React = require('react');
const Layout = require('./layout');
const InputForm = require('./inputForm');


class EditNote extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <html lang="en">
                <Layout />
                <body>
                    <div className="container">
                        <h2 className="text-center">Edit note</h2>
                        <InputForm />
                    </div>

                    <script src="/script.js"></script>
                </body>
            </html>
        )
    }
}

module.exports = EditNote;