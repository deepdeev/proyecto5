import React, { Component, PropTypes } from 'react';
import {createContainer} from 'meteor/react-meteor-data';

//My stuff
import {Records} from '../api/Records.js';
import Record from './Record.jsx';
import NewQuery from './NewQuery.jsx';


// App component - represents the whole app
class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {

    };

  }
  renderRecords() {
    return this.props.records.map((currentRecord) => (
        <Record key={currentRecord._id} record={currentRecord} />
    ));
  }

  render() {
    return (
        <div className="container-fluid">
          <header>
            <h1>Records</h1>
          </header>
          <div className="row records">
            {this.renderRecords()}
          </div>
          <NewQuery />
        </div>
    );
  }
}
App.propTypes={
  records:PropTypes.array.isRequired
};

export default createContainer(()=>
{
  return {
    records: Records.find({}).fetch()
  };
}, App);