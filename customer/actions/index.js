import axios from 'axios';
import { browserHistory } from 'react-router';
import config from '../../config/config';
import { AUTH_USER } from './types';

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
      dispatch({ type: AUTH_USER });
  //    - save JWT token
  //    - redirect to the route '/dashboard'
      browserHistory.push('/dashboard');
    })
    .catch(() => {
    // if request is bad:
    //    -show an error to the user
    })


  }
}
