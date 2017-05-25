import React, { Component, PropTypes } from 'react';
import {createContainer} from 'meteor/react-meteor-data';

//My stuff
import {Records} from '../api/Records.js';
import ViewExplore from './ViewExplore.jsx';
import ViewProfile from './ViewProfile.jsx';
// App component - represents the whole app
class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      currentView:'Home',

    };
    this.handleViewChange=this.handleViewChange.bind(this);
  }

  handleViewChange(newView)
  {

    this.setState({currentView:newView||'Home'});
  }
  render() {
    return (
        <section className="strips">
          <ViewExplore records={this.props.records} visible={this.state.currentView=='ViewExplore'} handleViewChange={this.handleViewChange}/>
          <ViewProfile records={this.props.records} visible={this.state.currentView=='ViewProfile'} handleViewChange={this.handleViewChange}/>
          <h3 className="strip__close" onClick={this.handleViewChange}><i className="fa fa-arrow-left"/> Home</h3>
        </section>

    );
  }
}
App.propTypes={
  records:PropTypes.array.isRequired
};

export default createContainer(()=>
{
  return {
    records: Records.find({},{sort:{lastModification:-1}}).fetch()
  };
}, App);