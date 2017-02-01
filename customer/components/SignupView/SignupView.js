import React, {Component} from 'react';
import { reduxForm, Field} from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './signup-view.scss';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

class SignupView extends Component {

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

    const { signupUser, error, handleSubmit, submitting, fields: { email, password, passwordConfirm }} = this.props;

    return (
      <div className="signup-view-container">
        <form onSubmit={handleSubmit(data => {signupUser(data)})}>
            <Field name="email" type="email" component={renderField} label="Email"/>
            <Field name="password" type="password" component={renderField} label="Password"/>
            <Field name="passwordConfirm" type="password" component={renderField} label="Confirm password"/>
          {error && <strong>{error}</strong>}
          {this.renderAlert()}
          <button type="submit" disabled={submitting}>Sign up!</button>
        </form>
      </div>
    );
  }
}

function validate(formProps) {
  const errors = {};

  if(!formProps.email) {
    errors.email = 'Please enter an email';
  }

   if(!formProps.password) {
    errors.password = 'Please enter a password';
  }

   if(!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please enter a confirm password';
  }

  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match!';
  }

  return errors;
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

SignupView = reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate: validate
})(SignupView);

SignupView = connect(mapStateToProps, actions)(SignupView);

export default SignupView;
