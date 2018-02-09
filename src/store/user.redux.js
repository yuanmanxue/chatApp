/**
 * @Author: yuanmanxue
 * @Date:   2018-02-06 08:56:59
 * @Last modified by:   yuanmanxue
 * @Last modified time: 2018-02-09 04:20:36
 */

import axios from 'axios'
import {Toast} from 'antd-mobile'
import {getRedirectPath} from './util.js'

const AUTH_SUCCESS = 'AUTH_SUCCESS'
const ERROE_MSG = 'ERROE_MSG'
const LOAD_DATA = 'LOAD_DATA'
const initState = {
  redirectTo:'',
  user: '',
  pwd: '',
  isRegister:false,
  isLogin:false,
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
        redirectTo:getRedirectPath(action.playload),
        ...action.playload
      }
    case LOAD_DATA:
      return {...state, ...action.payload}
    case ERROE_MSG:
      return {
        ...state,
        isAuth: false,
        msg: action.msg
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
        Toast.success('注册成功！',1,null,true)
        setTimeout(()=> {
          dispatch(authSuccess({user, pwd, type,isRegister:true}))
        },1000)
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
        Toast.success('登录成功！',1,null,true)
        setTimeout(() => {
          dispatch(authSuccess({...res.data.data,isLogin:true}))
        },1000)
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
          Toast.success('保存成功！',1,null,true)
          setTimeout(() => {
            dispatch(authSuccess(res.data.data))
          },1000)
        } else {
          dispatch(errorMsg(res.data.msg))
        }
      })
  }
}

function errorMsg(msg) {
  Toast.fail(msg,2,null,true)
  return {msg, type: ERROE_MSG}
}
function authSuccess(data) {
  return {type: AUTH_SUCCESS, playload: data}
}
export function loadData(userinfo){
	return { type:LOAD_DATA, payload:userinfo}
}
    
