import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './logout-view.scss';

class LogoutView extends Component {

  componentWillMount() {
    this.props.logoutUser();
  }

  render() {
    return <div className="logout-view-container">Sorry to see you go!</div>;
  }
}

export default connect(null, actions)(LogoutView);
