/**
 * @Author: yuanmanxue
 * @Date:   2018-02-02 04:29:12
 * @Last modified by:   yuanmanxue
 * @Last modified time: 2018-02-10 03:49:49
 */
import { combineReducers } from 'redux';
import {user} from './user.redux.js';
import {chatuser} from './chatuser.redux'
const reducers = combineReducers({
  user,
  chatuser
})
export default reducers
