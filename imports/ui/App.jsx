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
      currentView:'',

    };
    this.handleViewChange=this.handleViewChange.bind(this);
  }

  handleViewChange(newView)
  {
    this.setState({currentView:newView});
  }
  render() {
    return (
        <section className="strips">
          <ViewExplore records={this.props.records} visible={this.state.currentView=='ViewExplore'} handleViewChange={this.handleViewChange}/>
          <ViewProfile visible={this.state.currentView=='ViewProfile'} handleViewChange={this.handleViewChange}/>
          <i className="fa fa-close strip__close"/>
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