import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import './login-view.scss';
import * as actions from '../../actions';

class LoginView extends Component {
  handleFormSubmit({ email, password }) {
    console.log(email, password);
    // Need to do something to log user in
    this.props.loginUser({ email, password });
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
          <button type="submit">Log in</button>
        </form>
      </div>
    );
  }
}

LoginView = reduxForm({
  form: 'login',
  fields: ['email', 'password']
})(LoginView);

LoginView = connect(null, actions)(LoginView);

export default LoginView;
