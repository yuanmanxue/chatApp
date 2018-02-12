/**
 * @Author: yuanmanxue
 * @Date:   2018-02-06 08:56:59
 * @Last modified by:   yuanmanxue
 * @Last modified time: 2018-02-10 03:29:00
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {WingBlank, WhiteSpace, List, InputItem, Button,Icon} from 'antd-mobile';
import axios from 'axios';

import {login} from '../../store/user.redux.js';
import Logo from '../../components/logo/logo.jsx';

@connect(state => state.user, {login})
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      pwd: ''
    }
    this.handleLogin = this.handleLogin.bind(this)
    this.register = this.register.bind(this)
  }
  handleChange(key,value) {
    this.setState({
      [key]:value
    })
  }
  handleLogin() {
    this.props.login(this.state)
  }
  register(){
    this.props.history.push('/register')
  }
  render() {
    return (
      <div>
        <Logo></Logo>
      {this.props.isLogin ? <Redirect to={this.props.redirectTo} /> : null}
        <WingBlank>
          <List>
            <InputItem onChange={v=>this.handleChange('user',v)} clear={this.props.msg}>用户：
            </InputItem>
          <InputItem type="password" onChange={v=>this.handleChange('pwd',v)} clear={this.props.msg}>密码：
          </InputItem>
          </List>
          <WhiteSpace/>
          <Button type="primary" onClick={this.handleLogin}>登录</Button>
          <WhiteSpace/>
          <Button type="primary" onClick={this.register}>注册</Button>
        </WingBlank>
      </div>
    );
  }
}

export default Login
