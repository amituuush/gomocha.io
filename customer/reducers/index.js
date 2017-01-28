import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
  auth: authReducer,
  form: reduxFormReducer
});

export default rootReducer;
