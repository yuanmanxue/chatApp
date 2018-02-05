/**
 * @Author: yuanmanxue
 * @Date:   2018-02-02 04:29:12
 * @Last modified by:   yuanmanxue
 * @Last modified time: 2018-02-02 05:16:53
 */
import { combineReducers } from 'redux';
import {auth} from './user.redux.js';
const reducers = combineReducers({
  auth
})
export default reducers
