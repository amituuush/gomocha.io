import { combineReducers } from 'redux';
import commentsReducer from './comments';
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
  comments: commentsReducer,
  form: reduxFormReducer
});

export default rootReducer;
