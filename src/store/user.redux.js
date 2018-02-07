/**
 * @Author: yuanmanxue
 * @Date:   2018-02-06 08:56:59
 * @Last modified by:   yuanmanxue
 * @Last modified time: 2018-02-07 05:32:47
 */

import axios from 'axios'
import {getRedirectPath} from './util.js'

const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const ERROE_MSG = 'ERROE_MSG'
const initState = {
  redirectTo:'',
  isAuth: false,
  user: '',
  pwd: '',
  repeatpwd: '',
  type: '',
  msg: ''
}
// reducer
export function user(state = initState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuth: true,
        msg: '',
        redirectTo:getRedirectPath(action.payload),
        ...action.playload
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        msg: '',
        redirectTo:getRedirectPath(action.payload),
        ...action.playload
      }
    case ERROE_MSG:
      return {
        ...state,
        isAuth: false,
        mag: action.msg
      }
    default:
      return state
  }
}
// action creators
export function register({user, pwd, repeatpwd, type}) {
  if (!user || !pwd || !type) {
    return errorMsg('用户名和密码必须输入！')
  }
  if (pwd !== repeatpwd) {
    return errorMsg('用户名和密码不一致！')
  }
  return dispatch => {
    axios.post('/user/register', {user, pwd, type}).then(res => {
      if (res.status == 200 && res.data.code == 0) {
        dispatch(registerSuccess({user, pwd, type}))
      } else {
        dispatch(errorMsg(res.data.msg))
      }
    })
  }
}
export function login({user, pwd}) {
  if (!user||!pwd) {
    return errorMsg('用户密码必须输入')
  }
  return dispatch => {
    axios.post('/user/login', {user, pwd}).then(res => {
      if (res.status == 200 && res.data.code == 0) {
        console.log(res.data.data)
        dispatch(loginSuccess(res.data.data))
      } else {
        dispatch(errorMsg(res.data.msg))
      }
    })
  }
}
function errorMsg(msg) {
  return {msg, type: ERROE_MSG}
}
function registerSuccess(data) {
  return {type: REGISTER_SUCCESS, playload: data}
}
function loginSuccess(data) {
  console.log(data)
  return {type: LOGIN_SUCCESS, playload: data}
}
