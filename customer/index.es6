import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import { AUTH_USER } from './actions/types.js';
import Routes from './routes';
import reducers from './reducers';
import sass from './style.scss';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');

if (token) {
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <Router
      routes={Routes}
      history={hashHistory}
      onUpdate={() => window.scrollTo(0, 0)} >
    </Router>
  </Provider>
  ,document.getElementById('root')
)
