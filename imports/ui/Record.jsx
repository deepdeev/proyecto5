import React, {Component} from "react";

export default class Record extends Component
{
  constructor(props)
  {
    super(props);

    this.renderRecords=this.renderRecords.bind(this);
  }
  renderRecords()
  {
    return this.props.record.feelings.document_tone.tone_categories[0].tones.map((tone)=>{
      return (<span key={tone.tone_id}> {tone.tone_name}: {tone.score}</span>);
    });
  }
  render()
  {
    return (
        <div>
          <p>Query: {this.props.record.query}, Tones:</p>
          {this.renderRecords()}
        </div>
    );
  }
}