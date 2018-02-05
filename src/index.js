/**
 * @Author: yuanmanxue
 * @Date:   2018-02-01 05:42:42
 * @Last modified by:   yuanmanxue
 * @Last modified time: 2018-02-02 05:00:53
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware ,compose} from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter,Route,Link } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import './config';
import App from './App';
import  reducers from './store/reducers.js';
import Login from './container/login/login.jsx'
// redux 4.5
const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	window.devToolsExtension?window.devToolsExtension():f=>f
))

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <ul>
          <li><Link to="/login">login</Link></li>
          </ul>
          <Route path="/login" component={Login}/>
        </div>
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('root')
);
registerServiceWorker();
