import React, {Component} from "react";
import Record from './Record.jsx';
import SearchBox2 from './SearchBox2.jsx';
import Signup from './Signup.jsx';
import Login from './Login.jsx';

export default class ViewProfile extends Component {
  constructor(props){
    super(props);
    this.state={
      searches:0
    };
    this.renderPopularRecords=this.renderPopularRecords.bind(this);
    this.handleViewChange=this.handleViewChange.bind(this);
    this.renderRecentRecords=this.renderRecentRecords.bind(this);
    this.renderUserRecord=this.renderUserRecord.bind(this);
    // this.logout= this.logout.bind(this);
    this.addSearch=this.addSearch.bind(this);
  }
  logout() {
    console.log("se ejecuta logout");
    Meteor.logout();
  }
  //This function is temporal
  addSearch()
  {
    if(this.state.searches<=2)
      this.setState({searches:this.state.searches+1});
  }
  handleViewChange()
  {
    // if(!this.props.visible)
    this.props.handleViewChange('ViewProfile');
  }
  renderRecentRecords() {
    return this.props.records.sort((a,b)=>{return b.lastModification-a.lastModification}).slice(0,this.state.searches).map((currentRecord) => (
        <Record key={currentRecord._id} record={currentRecord} />
    ));
  }
  renderPopularRecords() {

    return this.props.records.sort((a,b)=>{return b.upvotes-a.upvotes}).slice(0,6).map((currentRecord) => (
        <Record key={currentRecord._id} record={currentRecord} size="col-md-6"/>
    ));
  }
  renderUserRecord() {

    return this.props.records.sort((a,b)=>{return b.upvotes-a.upvotes}).slice(0,1).map((currentRecord) => (
        <Record key={currentRecord._id} record={currentRecord} size="col-md-12" type="userRecord"/>
    ));
  }


  render()
  {
    if(this.props.visible)
    {
      return (
          <article className="strips__strip" >
            <SearchBox2 visible={true} addSearch={this.addSearch}/>
            <div className="strip__content profile" >
              <h1 className="strip__title" data-name="Lorem" >Profile</h1>
              <div className="container-fluid strip__inner-content">
                { this.props.currentUser ?
                    <div>
                    <div className="col-md-8 row records profile">
                      {this.state.searches>0?
                          <div className="col-md-12 row sectionTitle">
                            <h2>Recent Searches</h2>
                          </div>:
                          <span className="hidden"/>
                      }

                      {this.renderRecentRecords()}
                      <div className="col-md-12 row sectionTitle">
                        <h2>Popular</h2>
                      </div>
                      {this.renderPopularRecords()}
                    </div>
                    <div className="col-md-4 row profile-info">
                        <div className="col-md-12 row sectionTitle">
                  <h2>Luis Mesa</h2>
                  <h5>@luisMesa25</h5>
                  </div>
                  <div className="col-md-12 row userRecord">
                {this.renderUserRecord()}
                  </div>
                  </div>
                    <a role="button" data-toggle="collapse" href="#" onClick={this.logout}> Log out</a>
                    </div>
                    :
                    <div>
                      <Signup isLogged={this.props.currentUser}/>
                      <Login isLogged={this.props.currentUser}/>
                    </div>

                }

              </div>
            </div>
          </article>
      );
    }
    else
    {
      return (
          <article className="strips__strip" >
            <SearchBox2 visible={false}/>
            <div className="strip__content" onClick={this.handleViewChange}>
              <h1 className="strip__title" data-name="Lorem" >Profile</h1>
              <p className="strip__title mainTitle2" >LINGS</p>
            </div>
          </article>
      );
    }
  }
}
