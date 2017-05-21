import React, {Component} from "react";
import PercentCircle from './PercentCircle.jsx';
export default class Record extends Component
{
  constructor(props)
  {
    super(props);

    this.renderTones=this.renderTones.bind(this);
  }
  renderTones()
  {
    let query =this.props.record._id;
    // return (<PercentCircle key={this.props.record.feelings.document_tone.tone_categories[0].tones[0].tone_id} idElement={this.props.record.feelings.document_tone.tone_categories[0].tones[0].tone_id}/>);
    return this.props.record.feelings.document_tone.tone_categories[0].tones.map((tone)=>{
      let paramId='r-'+query+'-'+tone.tone_id;

      return (
          <div key={paramId+'key'} className="col-md-2" >
            <PercentCircle  idElement={paramId} endPercent={tone.score} toneName={tone.tone_name}/>
          </div>
      );
    });
  }
  render()
  {
    return (
        <div className="col-md-12 row record">
          <p>Query: {this.props.record.query}, Tones:</p>
          {this.renderTones()}
        </div>
    );
  }
}