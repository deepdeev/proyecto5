import React, {Component} from "react";
import Record from './Record.jsx';
import SearchBox from './SearchBox.jsx';
export default class ViewExplore extends Component {
  constructor(props){
    super(props);
    this.state={
      searches:0,
    };
    this.renderPopularRecords=this.renderPopularRecords.bind(this);
    this.handleViewChange=this.handleViewChange.bind(this);
    this.renderRecentRecords=this.renderRecentRecords.bind(this);

    this.addSearch=this.addSearch.bind(this);
  }
  //This function is temporal
  addSearch()
  {
    if(this.state.searches<=3)
      this.setState({searches:this.state.searches+1});
  }
  handleViewChange()
  {
    // if(!this.props.visible)
      this.props.handleViewChange('ViewExplore');
  }
  renderRecentRecords() {
    return this.props.records.sort((a,b)=>{return b.lastModification-a.lastModification}).slice(0,this.state.searches).map((currentRecord) => (
        <Record key={currentRecord._id} record={currentRecord} />
    ));
  }
  renderPopularRecords() {

    return this.props.records.sort((a,b)=>{return b.upvotes-a.upvotes}).slice(0,9).map((currentRecord) => (
        <Record key={currentRecord._id} record={currentRecord} />
    ));
  }
  render()
  {
    if(this.props.visible)
    {
      return (
          <article className="strips__strip" >
            <SearchBox visible={true} addSearch={this.addSearch}/>
            <div className="strip__content strip__content2" >
              <h1 className="strip__title" data-name="Lorem" >Explore</h1>
              <p className="strip__title" data-name="Lorem" >Explore how the public feels about  Obama, Clinton, Trump and events such as Manchester bombing. You can search anything you want.</p>
              <div className="container-fluid strip__inner-content">
                <div className="row records explore ">
                  {this.state.searches>0?
                      <div className="col-md-12 row sectionTitle">
                        <h2>Recent Searches</h2>
                      </div>:
                      <span className="hidden"></span>
                  }

                  {this.renderRecentRecords()}
                  <div className="col-md-12 row sectionTitle">
                    <h2>Popular</h2>
                  </div>
                  {this.renderPopularRecords()}
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
              <p className="strip__title mainText1" >Explore how the public feels about  Obama, Clinton, Trump and events such as Manchester bombing. You can search anything you want.</p>
              <p className="strip__title mainTitle1" >TWEE</p>
            </div>
          </article>
      );
    }
  }
}