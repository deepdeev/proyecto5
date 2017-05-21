import React, {Component} from "react";

import Record from './Record.jsx';
import NewQuery from './SearchBox.jsx';

export default class ViewProfile extends Component {
  constructor(props){
    super(props);
    this.state={

    };
    this.renderRecords=this.renderRecords.bind(this);
    this.handleViewChange=this.handleViewChange.bind(this);
  }
  handleViewChange()
  {
    // if(!this.props.visible)
      this.props.handleViewChange('ViewProfile');
  }
  renderRecords() {
    return this.props.records.map((currentRecord) => (
        <Record key={currentRecord._id} record={currentRecord} />
    ));
  }
  render()
  {
    return (
        <article className="strips__strip" >
          <div className="strip__content">
            <h1 className="strip__title" data-name="Lorem" >Profile</h1>

                <div className="strip__inner-text">
                  <h2>Ettrics</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sapiente deserunt consectetur, quod reiciendis corrupti quo ea aliquid! Repellendus numquam quo, voluptate. Suscipit soluta omnis quibusdam facilis, illo voluptates odit!</p>
                  <p>
                    <a href="https://twitter.com/ettrics" target="_blank"><i className="fa fa-twitter"/></a>
                  </p>
                </div>



          </div>
        </article>
    );
  }
}