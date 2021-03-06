import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import './login-view.scss';
import * as actions from '../../actions';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

class LoginView extends Component {
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
        <div className="gomocha-logo">
          <Link to="/">
            <img src="./img/gomocha-io-white.png" alt="GoMocha logo" />
          </Link>
        </div>
        <div className="login-panel">
          <h2>Log in to your account</h2>
          <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <div>
              <img src="./img/user-icon.png" alt="user"/>
              <Field name="email" component="input" type="email" placeholder="Email"/>
            </div>
            <div>
              <img src="./img/password-icon.png" alt="password"/>
              <Field name="password" component="input" type="password" placeholder="Password"/>
            </div>
            {this.renderAlert()}
            <button type="submit">Log in</button>
          </form>
        </div>
        <div className="login-footer">
            <p>New to GoMocha.io?</p><Link to="/signup">Sign up</Link>
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

LoginView = reduxForm({
  form: 'login',
  fields: ['email', 'password']
})(LoginView);

LoginView = connect(mapStateToProps, actions)(LoginView);

export default LoginView;
