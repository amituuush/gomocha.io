import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class Login extends Component {
  render() {
    return (
      <form>
        <fieldset>
          <label>Email:</label>
          <input />
        </fieldset>
        <fieldset>
          <label>Password:</label>
          <input />
        </fieldset>
        <button type="submit">Log in</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'login',
  fields: ['email', 'password']
})(Login);
