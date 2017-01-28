import { combineReducers } from 'redux';
import { orderReducer } from './orderReducer';
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
    orders: orderReducer,
    form: reduxFormReducer
});

export default rootReducer;
