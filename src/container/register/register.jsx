/**
 * @Author: yuanmanxue
 * @Date:   2018-02-06 02:51:10
 * @Last modified by:   yuanmanxue
 * @Last modified time: 2018-02-06 05:12:54
 */
/**
  * @Author: yuanmanxue
  * @Date:   2018-02-06 08:56:59
 * @Last modified by:   yuanmanxue
 * @Last modified time: 2018-02-06 05:12:54
  */

import React, {Component} from 'react';
import {connect} from 'react-redux';
// import { Redirect } from 'react-router-dom';
import {
  WingBlank,
  WhiteSpace,
  List,
  InputItem,
  Button,
  Radio
} from 'antd-mobile';
import {setUser, setPwd, serRepeatPwd, setType} from '../../store/user.redux.js';
import Logo from '../../components/logo/logo.jsx';

// import axios from 'axios';

// import {login,getUserData} from '../../store/user.redux.js';

// @connect(state=>state.auth,{login,getUserData})

const RadioItem = Radio.RadioItem;
@connect(state => state.user, {setUser, setPwd, serRepeatPwd, setType})
class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      pwd: '',
      repeatpwd: '',
      type: 'genius'
    }
    this.handleRegister = this.handleRegister.bind(this)
  }
  handleUser(key, value) {
    this.setState({[key]: value})
    this.props.setUser(key, value)
    // console.log(this.state)
  }
  handlePwd(key, value) {
    this.setState({[key]: value})
  }
  handleRepeatPwd(key, value) {
    this.setState({[key]: value})
  }
  handleChange(key, value) {
    this.setState({[key]: value})
  }
  handleRegister() {
    console.log(this.state)
  }
  render() {
    return (
      <div>
        <Logo></Logo>
        <WingBlank>
          <List>
            <InputItem onChange={v => this.handleUser('user', v)}>用户：</InputItem>
            <InputItem type="password" onChange={v => this.handlePwd('pwd', v)}>密码：</InputItem>
            <InputItem type="password" onChange={v => this.handleRepeatPwd('repeatpwd', v)}>确认密码：</InputItem>
            <RadioItem checked={this.state.type == 'genius'} onChange={v => this.handleChange('type', 'genius')}>牛人</RadioItem>
            <RadioItem checked={this.state.type == 'boss'} onChange={v => this.handleChange('type', 'boss')}>BOSS</RadioItem>
          </List>
          <WhiteSpace/>
          <Button type="primary" onClick={this.handleRegister}>注册</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Register
