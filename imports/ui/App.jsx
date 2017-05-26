import React, { Component, PropTypes } from 'react';
import {createContainer} from 'meteor/react-meteor-data';

//My stuff
import {Records} from '../api/Records.js';
import ViewExplore from './ViewExplore.jsx';
import ViewProfile from './ViewProfile.jsx';
import Signup from './Signup.jsx';
import Login from './Login.jsx';

// App component - represents the whole app
class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      currentView:'Home',

    };
    this.handleViewChange=this.handleViewChange.bind(this);
    this.logout= this.logout.bind(this);
  }

  logout() {
      console.log("se ejecuta logout");
      Meteor.logout();
  }

  handleViewChange(newView)
  {

    this.setState({currentView:newView||'Home'});
  }
  render() {
    //console.log("log de props del app");
    //console.log(this.props);
    return (
        <section className="strips">
          { this.props.currentUser ?
            <a role="button" data-toggle="collapse" href="#" onClick={this.logout}> Log out</a>
            :
            <div>
              <Signup isLogged={this.props.currentUser}/>
              <Login isLogged={this.props.currentUser}/>
            </div>

          }

           <ViewProfile records={this.props.records} currentUser={this.props.currentUser} visible={this.state.currentView=='ViewProfile'} handleViewChange={this.handleViewChange}/>
           <ViewExplore records={this.props.records} visible={this.state.currentView=='ViewExplore'} handleViewChange={this.handleViewChange}/>


          <h3 className="strip__close" onClick={this.handleViewChange}><i className="fa fa-arrow-left"/> Home</h3>
        </section>

    );
  }
}
App.propTypes={
  records:PropTypes.array.isRequired,
  currentUser: PropTypes.object,
};

export default createContainer(()=>
{
  return {
    records: Records.find({},{sort:{lastModification:-1}}).fetch(),
    currentUser: Meteor.user(),
  };
}, App);
