const React = require('react');

class InputForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <form name="postForm">
                <input type="hidden" name="id" value="0"/>
                <input type="hidden" name="type-note" value="note"/>

                <div className="form-group text-center">
                    <label htmlFor="postName">
                        <input className="form-control" type="text" name="postName" placeholder="Title" required/>
                    </label>
                </div>
                <div className="form-group text-center">
                    <label htmlFor="postBody">   
                        <textarea className="form-control" type="text" name="postBody" placeholder="Body"  required/>
                    </label>
                </div>
                <div className="panel-body text-center">
                    <button type="submit" className="btn btn-sm btn-primary m-2"> Сохранить</button>
                    <button id="reset" className="btn btn-sm btn-primary m-2"> Сбросить</button>
                </div>
            </form>
        );
    }
}

module.exports = InputForm;