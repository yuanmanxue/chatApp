/**
 * @Author: yuanmanxue
 * @Date:   2018-02-06 08:56:59
 * @Last modified by:   yuanmanxue
 * @Last modified time: 2018-02-06 05:33:06
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {WingBlank, WhiteSpace, List, InputItem, Button} from 'antd-mobile';
import axios from 'axios';

// import {setUser,setPwd,serRepeatPwd,setType} from '../../store/user.redux.js';
import Logo from '../../components/logo/logo.jsx';
//
// @connect(state=>state.user,{setUser,setPwd,serRepeatPwd,setType})
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {}
    }
  }

  componentDidMount() {
    // this.props.getUserData()
  }

  render() {
    console.log(this.props.isAuth);
    return (
      <div>
        <Logo></Logo>
        {/* {this.props.isAuth ? <Redirect to="/" /> : null} */}
        <WingBlank>
          <List>
            <InputItem>用户：</InputItem>
            <InputItem type="password">密码：</InputItem>
          </List>
          <WhiteSpace/>
          <Button type="primary">登录</Button>
        </WingBlank>
      </div>
    );
  }
}

export default Login
