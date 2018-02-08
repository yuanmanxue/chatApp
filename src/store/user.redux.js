/**
 * @Author: yuanmanxue
 * @Date:   2018-02-06 08:56:59
 * @Last modified by:   yuanmanxue
 * @Last modified time: 2018-02-08 04:25:39
 */

import axios from 'axios'
import {getRedirectPath} from './util.js'

const AUTH_SUCCESS = 'AUTH_SUCCESS'
const ERROE_MSG = 'ERROE_MSG'
const LOAD_DATA = 'LOAD_DATA'
const initState = {
  redirectTo:'',
  user: '',
  pwd: '',
  repeatpwd: '',
  type: '',
  msg: ''
}
// reducer
export function user(state = initState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        msg: '',
        redirectTo:getRedirectPath(action.payload),
        ...action.playload
      }
    case LOAD_DATA:
      return {...state, ...action.payload}
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
        dispatch(authSuccess({user, pwd, type}))
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
        dispatch(authSuccess(res.data.data))
      } else {
        dispatch(errorMsg(res.data.msg))
      }
    })
  }
}

export function update(data){
  return dispatch => {
    axios.post('/user/update',data)
      .then(res => {
        if(res.status == 200 && res.data.code == 0){
          dispatch(authSuccess(res.data.data))
        } else {
          dispatch(errorMsg(res.data.msg))
        }
      })
  }
}

function errorMsg(msg) {
  return {msg, type: ERROE_MSG}
}
function authSuccess(data) {
  return {type: AUTH_SUCCESS, playload: data}
}
export function loadData(userinfo){
	return { type:LOAD_DATA, payload:userinfo}
}
