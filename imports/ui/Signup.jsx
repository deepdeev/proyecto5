import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import {Meteor} from "meteor/meteor";

export default class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    //console.log("evento sale disparado");
    e.preventDefault();
    let email = document.getElementById('register-email').value;
    let twitterUsername = document.getElementById('register-twitter-username').value;
    let password = document.getElementById('register-password').value;
    Accounts.createUser({
    email: email,
    password: password,
    profile: {
      username: twitterUsername,
      favorites: [],
      owned: []
    }

    });
    //console.log(this.props);
    //this.props.changeToLogin();
    //console.log("pasa changeToLogin en handle submit");
  }
  render () {
    //console.log("props es");
    //console.log(this.props);
    return(
      <div>
        {
          this.props.isLogged ?
          <div>Logeado</div>
          :
          <div className="signup">
        					<h3>SignUp</h3>
        					<form onSubmit={this.handleSubmit}>
        							<input id="register-email" type="text" placeholder="Email"  required=""/>
        							<div className="clearfix"></div>
                      <input id="register-twitter-username" type="text" placeholder="Twitter username"  required=""/>
        							<div className="clearfix"></div>
        							<input id="register-password" type="password" placeholder="Password"  required=""/>
        							<div className="clearfix"></div>
        						<input type="submit" value="Signup"/>
        					</form>

        	</div>

        }

      </div>
    )
  }
}
