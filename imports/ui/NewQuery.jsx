import React, {Component} from "react";
import {Meteor} from 'meteor/meteor';
import ReactDOM from 'react-dom';

export default class NewQuery extends Component
{
  constructor(props)
  {
    super(props);

    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleSubmit(event)
  {
    event.preventDefault();
    //  Find the fields from the form
    let newQuery = ReactDOM.findDOMNode(this.refs.newQuery).value.trim();

    Meteor.call('newQuery',newQuery);
    ReactDOM.findDOMNode(this.refs.newQuery).value='';

  }
  render()
  {
    return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label> new query
              <input type="text" className="form-control" id="newQuery" ref="newQuery" placeholder="Search something..."/>
            </label>
          </form>
        </div>
    );
  }
}