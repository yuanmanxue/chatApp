/**
 * @Author: yuanmanxue
 * @Date:   2018-02-06 02:55:42
 * @Last modified by:   yuanmanxue
 * @Last modified time: 2018-02-09 04:39:15
 */
import React, {Component} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import {loadData} from '../../store/user.redux'
@withRouter
@connect(null, {loadData})
class AutoRouter extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const publicLsit = ['/login', '/register']
    const pathname = this.props.location.pathname
    if (publicLsit.indexOf(pathname) > -1) {
      return null
    }
    // 获取用户信息
    axios.get('/user/info').then(res => {
      if (res.status == 200) {
        if (res.data.code == 0) {
          // 有登录信息
          this.props.loadData(res.data.data)
          // this.props.history.push(`/${res.data.data.type}info`)
        } else {
          // 没有登录信息
          this.props.history.push('./register')
        }
      }
    }, req => {})
    // 是否登录
    // 现在的url地址，  login不需要跳转

    // 用户的type  是boss还是牛人 跳转的列表还是不一样的
    // 用户是否完成信息， 选择头像，个人简介，如果没有完善信息的话 不能进行其他的操作
  }

  render() {
    return null
  }
}
export default AutoRouter
