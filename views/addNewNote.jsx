const React = require('react');
const Layout = require('./layout');
const InputForm = require('./InputForm');
const LayoutFooter = require('./LayoutFooter');


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
                        {console.log(this.props.result._id)}

                        <InputForm />
                    </div>
                    <LayoutFooter />
                </body>
            </html>

        )
    }
}

module.exports = AddNewNote;