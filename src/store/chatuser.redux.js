/**
 * @Author: yuanmanxue
 * @Date:   2018-02-10 03:32:37
 * @Last modified by:   yuanmanxue
 * @Last modified time: 2018-02-10 04:03:05
 */
 import axios from 'axios'
 import {Toast} from 'antd-mobile'

 const initState = {
 	userlist:[]
 }

 const USER_LIST = 'USER_LIST'

 export function chatuser(state=initState,action) {
   switch(action.type){
     case USER_LIST:
      return {...state,userlist:action.payload}
    default:
      return {...state}
   }
 }

 export function getUserList(type){
   return dispatch => {
     axios.get(`/user/list?type=${type}`)
       .then(res=> {
        if (res.status == 200 && res.data.code == 0) {
           dispatch(userList(res.data.data))
         }
       })
   }
 }

 function userList(data) {
   return {type:USER_LIST,payload:data}
 }
