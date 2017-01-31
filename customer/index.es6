import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import Routes from './routes';
import reducers from './reducers';
import sass from './style.scss';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router
      routes={Routes}
      history={hashHistory}
      onUpdate={() => window.scrollTo(0, 0)} >
    </Router>
  </Provider>
  ,document.getElementById('root')
)
