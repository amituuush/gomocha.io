import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers';
import createLogger from 'redux-logger';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';

import { AUTH_USER } from './actions/types';

const logger = createLogger();

const store = createStore(rootReducer,
  // compose(
  //   applyMiddleware(ReduxPromise, ReduxThunk, logger),
  //   window.devToolsExtension ? window.devToolsExtension() : f => f
  // )
  compose(
    applyMiddleware(ReduxPromise, ReduxThunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

const token = localStorage.getItem('token');

if (token) {
  store.dispatch({ type: AUTH_USER });
}

module.exports = store;
