import axios from 'axios';
import { browserHistory, hashHistory } from 'react-router';
import config from '../../config/config';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER } from './types';

const ROOT_URL = config.ROOT_URL;

export function loginUser({ email, password }) {
  return function(dispatch) {
  // Submit email/password to server
  axios.post(`${ROOT_URL}/login`, {
    email: email,
    password: password
  })
    .then(response => {
  // If request is good:
  //    -update state to indicate user is authenticated
  //    - save JWT token
        localStorage.setItem('token', response.data.token);

  //    - redirect to the route '/dashboard'
      browserHistory.push('/admin-dash');
    })
    .catch(() => {
    // if request is bad:
    //    -show an error to the user
      dispatch(authError('Bad login info'));
    })
  }
}

export function signupUser({ email, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signup`, {
      email: email,
      password: password
    })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/admin-dash');
      })
      .catch(error => {
        let e = {...error};
        dispatch(authError(e.response.data.error));
      })
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function logoutUser() {
  localStorage.removeItem('token');

  return {
    type: UNAUTH_USER,
  };
}

export function fetchMessage() {
  return function(disptach) {
    axios.get(ROOT_URL, {
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(response => {
        console.log(response);
      });
  }
}
