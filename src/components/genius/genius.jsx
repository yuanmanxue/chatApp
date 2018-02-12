/**
 * @Author: yuanmanxue
 * @Date:   2018-02-10 09:28:54
 * @Last modified by:   yuanmanxue
 * @Last modified time: 2018-02-10 04:58:43
 */

 import React from 'react'
 import{connect} from 'react-redux'
 import {getUserList} from '../../store/chatuser.redux'
 import UserList from '../userlist/userlist.jsx'
 @connect(state=>state.chatuser,{getUserList})
 class Genius extends React.Component {
   constructor(props){
     super(props)
     this.state={
     }
   }
   componentDidMount() {
     this.props.getUserList('boss')
   }
   render () {
     return (
       <div style={{marginTop:45}}>
         <UserList userlist={this.props.userlist}></UserList>
       </div>
     )
   }
 }

 export default Genius;
