import React, {Component} from "react";
import {Meteor} from 'meteor/meteor';
import ReactDOM from 'react-dom';

export default class SearchBox2 extends Component
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
    let newQuery = ReactDOM.findDOMNode(this.refs.newQuery2).value.trim();

    Meteor.call('newQuery',newQuery);
    Meteor.call('addRecordToUser', newQuery);
    ReactDOM.findDOMNode(this.refs.newQuery2).value='';
    this.props.addSearch();
  }
  render()
  {
    return (
    <div className={this.props.visible?"search search2":"search search2 hidden"}>
      <button id="btn-search-close2" className="btn btn--search-close" >
        <svg className="icon icon--cross">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </svg>
      </button>
      <form className="search__form" action="" onSubmit={this.handleSubmit}>
        <input id="search-input" className="search__input search__input2" name="search" type="search" ref="newQuery2" placeholder="Search something..." />
        <button className="btn btn--search">
          <svg className="icon icon--search">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
        </button>
      </form>
      <div className="search__suggestion">
        <h3>May We Suggest?</h3>
        <p>#drone #funny #catgif #broken #lost #love #hilarious #good #red #blue #nono #why #yes #yesyes #aliens #green #fancy #pants #trees</p>
      </div>
    </div>

    );
  }
}
