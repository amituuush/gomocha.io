import React from 'react';
import { Link } from 'react-router';
import { LaunchDarkly } from 'react-launch-darkly';
import './app.scss';

var App = React.createClass({

  render: function() {
    return (
      <div>
        <LaunchDarkly clientId={} user={{key: "user key"}}
          {this.props.children}
        </LaunchDarkly>
      </div>
    )
  }
})

module.exports = App;
