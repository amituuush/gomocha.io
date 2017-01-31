import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { orderReducer } from './orderReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    orders: orderReducer,
    form: reduxFormReducer,
    auth: authReducer
});

export default rootReducer;
