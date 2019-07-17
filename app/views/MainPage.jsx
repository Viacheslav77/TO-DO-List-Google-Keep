const React = require('react');
const Layout = require('../../app/views/layout');
const LayoutFooter = require('../../app/views/LayoutFooter');
const TableToDoList = require('../../app/views/TableToDoList');
const ListGroupNotes = require('../../app/views/ListGroupNotes')
const ListsNote = require('../../app/views/ListsNote');
// import logo from '../../public/keep.png';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <html lang="en">
                <Layout />
                <body >

                    <div className="container-fluid" id='none'>
                        <div className="container">
                            <div className="row">
                                <img className='col-2 mt-3 logo' src='' alt='logo' />
                                <h3 className="col-3 text-black-50 mt-4">My Keep</h3>
                                <input className="col mt-4 form-control border border-light mb-1 " type="text" id="search" name="new-note" placeholder="+ Search..." required />                                 
                            </div>

                        </div>

                        <hr></hr>
                        <div id='list-note' style={{ display: 'none' }} >
                            <ListsNote />
                        </div>

                        <div className="container p-3 mt-3 border rounded-lg bg-light shadow" id='new-note'   >
                            <form name="new-note" >
                                <div className="container" >
                                    <input className="form-control form-control-lg border border-light mb-1" type="text" autocomplete="off" id="new-title" name="new-note" placeholder="+ Take a note..." required />
                                </div>
                            </form>
                        </div>

                        <h4 className="text-center text-black-50 m-4">Added notes</h4>

                        <ListGroupNotes result={this.props.result} />

                    </div>
                    <LayoutFooter />
                </body>
            </html>
        )
    }
}

module.exports = MainPage;