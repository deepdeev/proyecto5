import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '../imports/ui/App.jsx';

Meteor.startup(() => {
  $.getScript('../../js/jquery.min.js', function(){});
  $.getScript('../../js/bootstrap.js', function(){});
  $.getScript('../../js/strips.js', function(){});
  $.getScript('../../js/searchBox.js', function(){});
  $.getScript('../../js/searchBox2.js', function(){});
  $.getScript('../../js/main.js', function(){});
  render(<App />, document.getElementById('render-target'));
});