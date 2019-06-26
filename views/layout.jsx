const React = require('react');

class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            
            <head>
                <title>{this.props.title}</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
                      integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
                      crossOrigin="anonymous"/>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.0/css/all.css"
                      integrity="sha384-aOkxzJ5uQz7WBObEZcHvV5JvRW3TUc2rNPA7pe3AwnsUohiw1Vj2Rgx2KSOkF5+h"
                      crossOrigin="anonymous"/>
                <link rel="stylesheet" href="/style.css"/>
                <script src="https://code.jquery.com/jquery-3.4.1.min.js"
                        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
                        crossOrigin="anonymous"></script>
            </head>

        )
    }
}

module.exports = Layout;