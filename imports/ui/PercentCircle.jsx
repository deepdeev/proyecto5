import React, {Component} from "react";
import d3 from "d3";
export default class PercentCircle extends Component
{
  constructor(props)
  {
    super(props);


  }
  componentDidMount()
  {
    let colors = {
      'pink': '#d6306d',
      'yellow': '#f0ff08',
      'green': '#47e495'
    };

    let color = this.props.color||colors.pink;

    let radius = this.props.radius || 50;
    let border = this.props.border || 5;
    let padding = this.props.padding || 0;
    let startPercent = 0;
    let endPercent = this.props.endPercent||100;
    let fontSize = this.props.fontSize || '20px';

    let twoPi = Math.PI * 2;
    let formatPercent = d3.format('.0%');
    let boxSize = (radius + padding) * 2;


    let count = Math.abs((endPercent - startPercent) / 0.01);
    let step = endPercent < startPercent ? -0.01 : 0.01;

    let arc = d3.svg.arc()
    .startAngle(0)
    .innerRadius(radius)
    .outerRadius(radius - border);

    // let parent = d3.select('div#content');
    let parent = d3.select('div#'+this.props.idElement);

    let svg = parent.append('svg')
    .attr('width', boxSize)
    .attr('height', boxSize);

    let defs = svg.append('defs');

    let filter = defs.append('filter')
    .attr('id', 'blur');

    filter.append('feGaussianBlur')
    .attr('in', 'SourceGraphic')
    .attr('stdDeviation', '7');

    let g = svg.append('g')
    .attr('transform', 'translate(' + boxSize / 2 + ',' + boxSize / 2 + ')');

    let meter = g.append('g')
    .attr('class', 'progress-meter');

    meter.append('path')
    .attr('class', 'background')
    .attr('fill', '#ccc')
    .attr('fill-opacity', 0.5)
    .attr('d', arc.endAngle(twoPi));

    let foreground = meter.append('path')
    .attr('class', 'foreground')
    .attr('fill', color)
    .attr('fill-opacity', 1)
    .attr('stroke', color)
    .attr('stroke-width', 5)
    .attr('stroke-opacity', 1);
    // .attr('filter', 'url(#blur)');

    let front = meter.append('path')
    .attr('class', 'foreground')
    .attr('fill', color)
    .attr('fill-opacity', 1);

    let numberText = meter.append('text')
    .attr('fill', '#fafafa')
    .attr('text-anchor', 'middle')
    .attr('dy', '.35em')
    .attr('font-size',fontSize);

    if(this.props.toneName)
    {
      let toneText = meter.append('text').attr('y', '20')
      .attr('fill', '#fafafa')
      .attr('text-anchor', 'middle')
      .attr('dy', '.35em')
      .text(this.props.toneName);
    }

    function updateProgress(progress) {
      foreground.attr('d', arc.endAngle(twoPi * progress));
      front.attr('d', arc.endAngle(twoPi * progress));
      numberText.text(formatPercent(progress));
    }

    let progress = startPercent;

    (function loops() {
      updateProgress(progress);

      if (count > 0) {
        count--;
        progress += step;
        setTimeout(loops, 20);
      }
    })();
  }
  render()
  {
    return (<div id={this.props.idElement}></div>);
  }
}