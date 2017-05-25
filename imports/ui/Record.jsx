import React, {Component} from "react";
import PercentCircle from './PercentCircle.jsx';
export default class Record extends Component
{
  constructor(props)
  {
    super(props);

    this.colors = {
      Joy: '#52C6A2',
      Anger: '#EB8B6B',
      Fear: '#422662',
      Disgust: '#d6306d',
      Sadness: '#20255E'
  };

    this.renderTone=this.renderTone.bind(this);

  }
  renderTone(tone, higher)
  {
    let query =this.props.record._id;

      let paramId='r-'+query+'-'+tone.tone_id;
      if(higher)
      {
        return (
            <div key={paramId + 'key'} className="col-md-6 higherPercentCircle">
              <PercentCircle idElement={paramId} endPercent={tone.score} toneName={tone.tone_name} radius={60} color={this.colors[tone.tone_name]} border={5} padding={3} fontSize='40px'/>
            </div>
        );
      }
      else {
        return (
            <div key={paramId + 'key'} className="col-md-6 littlePercentCircle">
              <PercentCircle idElement={paramId} endPercent={tone.score} radius={25} color={this.colors[tone.tone_name]} border={2} padding={3} fontSize='15px'/>
              <p className="toneName">{tone.tone_name}</p>
            </div>
        );
      }

  }
  render()
  {
    this.props.record.feelings.document_tone.tone_categories[0].tones.sort((a,b)=>b.score-a.score);
    return (
        <div className="col-md-4 row recordBox">
          <div className="col-md-12">
            <h3>{this.props.record.query}</h3>
          </div>
          <div className="col-md-6 row">
            {this.renderTone(this.props.record.feelings.document_tone.tone_categories[0].tones[0],true)}
            <div className="col-md-1 row">
            </div>
            <div className="col-md-10 row">

            </div>
            <div className="col-md-1 row">
            </div>
          </div>
            <div className="col-md-6 row ">
              {this.renderTone(this.props.record.feelings.document_tone.tone_categories[0].tones[1])}
              {this.renderTone(this.props.record.feelings.document_tone.tone_categories[0].tones[2])}
              {this.renderTone(this.props.record.feelings.document_tone.tone_categories[0].tones[3])}
              {this.renderTone(this.props.record.feelings.document_tone.tone_categories[0].tones[4])}
            </div>


        </div>
    );
  }
}