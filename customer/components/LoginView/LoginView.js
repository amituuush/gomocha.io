import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class LoginView extends Component {
  handleFormSubmit({ email, password }) {
    console.log(email, password);
    // Need to do something to log user in
  }

  render() {
    const { handleSubmit, fields: { email, password }} = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset>
          <label>Email:</label>
          <input {...email} />
        </fieldset>
        <fieldset>
          <label>Password:</label>
          <input {...password} />
        </fieldset>
        <button type="submit">Log in</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'login',
  fields: ['email', 'password']
})(LoginView);
