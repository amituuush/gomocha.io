import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import './admin-login-view.scss';
import * as actions from '../../actions/auth';

class AdminLoginView extends Component {
  handleFormSubmit({ email, password }) {
    console.log(email, password);
    // Need to do something to log user in
    this.props.loginUser({ email, password });
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div>
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit, fields: { email, password }} = this.props;

    return (
      <div className="login-view-container">
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <div>
            <Field name="email" component="input" type="email" placeholder="Email"/>

          </div>
          <div>
            <Field name="password" component="input" type="password" placeholder="Password"/>
          </div>
          {this.renderAlert()}
          <button type="submit">Log in</button>
          <br />
          <Link to="/admin-signup">Sign up</Link>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

AdminLoginView = reduxForm({
  form: 'login',
  fields: ['email', 'password']
})(AdminLoginView);

AdminLoginView = connect(mapStateToProps, actions)(AdminLoginView);

export default AdminLoginView;
