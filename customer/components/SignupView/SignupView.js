import React, {Component} from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import './signup-view.scss';

class SignupView extends Component {
  render() {

    const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props;

    return (
      <div className="signup-view-container">
        <form>
          <div>
            <Field name="email" component="input" type="email" placeholder="Email" />
          </div>
          <div>
            <Field name="password" component="input" type="password" placeholder="Password" />
          </div>
          <div>
            <Field name="passwordConfirm" component="input" type="password" placeholder="Confirm password" />
          </div>
        </form>
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
