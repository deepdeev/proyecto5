import React, {Component} from "react";
import Record from './Record.jsx';
import SearchBox from './SearchBox.jsx';
export default class ViewExplore extends Component {
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
      this.props.handleViewChange('ViewExplore');
  }
  renderRecords() {
  // .slice(0,6)
    return this.props.records.sort((a,b)=>{return b.upvotes-a.upvotes}).slice(0,6).map((currentRecord) => (
        <Record key={currentRecord._id} record={currentRecord} />
    ));
  }
  render()
  {
    if(this.props.visible)
    {
      return (
          <article className="strips__strip" >
            <SearchBox visible={true}/>
            <div className="strip__content" >
              <h1 className="strip__title" data-name="Lorem" >Explore</h1>
              <div className="container-fluid strip__inner-content">
                <div className="row records">
                  <div className="col-md-12 row sectionTitle">
                    <h2>Popular</h2>
                  </div>
                  {this.renderRecords()}
                </div>
              </div>
            </div>
          </article>
      );
    }
    else
    {
      return (
          <article className="strips__strip" >
            <SearchBox visible={false}/>
            <div className="strip__content" onClick={this.handleViewChange}>
              <h1 className="strip__title" data-name="Lorem" >Explore</h1>

            </div>
          </article>
      );
    }
  }
}