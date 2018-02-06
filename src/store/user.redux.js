/**
 * @Author: yuanmanxue
 * @Date:   2018-02-06 08:56:59
 * @Last modified by:   yuanmanxue
 * @Last modified time: 2018-02-06 05:12:18
 */

import axios from 'axios'

const USER = 'USER'
const PWD = 'PWD'
const REPEATPWD ='REPEATPWD'
const TYPE = 'TYPE'
const inituser = {
	user:'',
	pwd:'',
	repeatpwd:'',
	type:''
}
// reducer
export function user(state=inituser,action){
	switch(action.type){
		case USER:
			return {...state, user:action.user.user}
		case PWD:
			return {...state, pwd:action.user.pwd}
		case REPEATPWD:
			return {...state, repeatpwd:action.user.repeatpwd}
		case TYPE:
			return {...state, type:action.user.type}
		default:
			return state
	}
}
// action
export function getUserData(){
	// dispatch用来通知数据修改
	// return dispatch=>{
	// 	axios.get('/data')
	// 		.then(res=>{
	// 			if (res.status===200) {
	// 				console.log(res.data);
	// 				dispatch(userData(res.data))
	// 			}
	// 		})
	// }
}

export function setUser(key,data){
	return {type:USER,[key]:data}
}
export function setPwd(data){
	return {type:PWD,pwd:data}
}
export function serRepeatPwd(data){
	return {type:REPEATPWD,repeatpwd:data}
}
export function setType(data){
	return {type:TYPE,type:data}
}
