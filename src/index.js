/**
 * @Author: yuanmanxue
 * @Date:   2018-02-01 05:42:42
 * @Last modified by:   yuanmanxue
 * @Last modified time: 2018-02-02 05:00:53
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './store/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App name="yyyy"/>, document.getElementById('root'));
registerServiceWorker();
