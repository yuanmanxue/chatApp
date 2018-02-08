/**
 * @Author: yuanmanxue
 * @Date:   2018-02-01 05:42:42
 * @Last modified by:   yuanmanxue
 * @Last modified time: 2018-02-08 02:41:11
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Link,Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import './config';
import reducers from './store/reducers.js'
import Login from './container/login/login.jsx'
import Register from './container/register/register.jsx'
import AutoRouter from './container/autorouter/autorouter.jsx'
import BossInfo from './container/bossinfo/bossinfo.jsx'
import GeniusInfo from './container/geniusinfo/geniusinfo.jsx'
// redux 4.5
const store = createStore(reducers, compose(applyMiddleware(thunk), window.devToolsExtension
  ? window.devToolsExtension()
  : f => f))

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <AutoRouter></AutoRouter>
        <Switch>
          <Route path="/bossinfo" component={BossInfo}></Route>
          <Route path="/geniusinfo" component={GeniusInfo}></Route>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
