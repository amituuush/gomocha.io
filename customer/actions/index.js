import axios from 'axios';
import config from '../../config/config';

const ROOT_URL = config.ROOT_URL;

export function loginUser({ email, password }) {
  return function(dispatch) {
  // Submit email/password to server
  axios.post(`${ROOT_URL}/login`, {
    email: email,
    password: password
  })
  // If request is good:
  //    -update state to indicate user is authenticated
  //    - save JWT token
  //    - redirect to the route '/dashboard'

  // if request is bad:
  //    -show an error to the user
  }
}
