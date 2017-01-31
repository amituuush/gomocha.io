import React, {Component} from 'react';
import { reduxForm } from 'redux-form';
import './signup-view.scss';

class SignupView extends Component {
  render() {
    return (
      <div className="signup-view-container">
        Signup
      </div>
    );
  }
}

SignupView = reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm']
})(SignupView);

SignupView = connect()(SignupView);

export default SignupView;
