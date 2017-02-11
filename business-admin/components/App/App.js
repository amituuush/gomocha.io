import React from 'react';
import { Link } from 'react-router';
import { LaunchDarkly } from 'react-launch-darkly';
import './app.scss';

var user = {
  "firstName": "Bob",
  "lastName": "Loblaw",
  "key": "bob@example.com",
  "custom": {
    "groups": "beta_testers"
  }
};

var App = React.createClass({

  render: function() {
    return (
      <div>
        <LaunchDarkly clientId={'587d8ac22f61020941bf5d2a'} user={user}>
          {this.props.children}
        </LaunchDarkly>
      </div>
    )
  }
})

module.exports = App;
