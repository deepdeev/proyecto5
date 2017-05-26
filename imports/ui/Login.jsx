import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import {Meteor} from "meteor/meteor";

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;
    Meteor.loginWithPassword(email, password, (err) => {
      if(err){

      } else {

      }
    });
  }
  render () {
    return(
      <div>
        {
          this.props.isLogged ?
          <div/>
          :
          <div className="login">
        					<h3>Login</h3>
        					<form onSubmit={this.handleSubmit}>
        							<input id="login-email" type="text" placeholder="Email"  required=""/>
        							<input id="login-password" type="password" placeholder="Password"  required=""/>
        						<input type="submit" value="Login"/>
        					</form>

        			</div>

        }

      </div>
    )
  }
}
