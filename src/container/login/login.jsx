import React, { Component } from 'react';
import { connect } from 'react-redux';
import {login,getUserData} from '../../store/user.redux.js';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

@connect(state=>state.auth,{login,getUserData})
class Login extends React.Component{
  constructor(props){
    super(props)
    this.state={
      data:{}
    }
  }

  componentDidMount() {
    this.props.getUserData()
  }

  render() {
    console.log(this.props.isAuth);
    return (
      <div>
        {this.props.isAuth ? <Redirect to="/123" /> : null}
        <h1>没有权限需要登录</h1>
      <button onClick={this.props.login}>登录</button>
      </div>
    );
  }
}

export default Login
