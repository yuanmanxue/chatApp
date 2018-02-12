/**
 * @Author: yuanmanxue
 * @Date:   2018-02-09 04:38:49
 * @Last modified by:   yuanmanxue
 * @Last modified time: 2018-02-11 01:43:53
 */
import React, {Component} from 'react';
import {Route,Switch} from 'react-router'
import {NavBar, TabBar, Icon} from 'antd-mobile'
import Boss from '../../components/boss/boss.jsx'
import Genius from '../../components/genius/genius.jsx'
import My from '../../components/my/my.jsx'
import Chat from '../../components/chat/chat.jsx'
import FooterBar from '../../components/footerbar/footerbar.jsx'
import '../../App.css'
import {connect} from 'react-redux'

@connect(state=>state)
class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const {pathname} = this.props.location
    const navList = [
      {
        title: '牛人列表',
        path: '/boss',
        icon: 'boss',
        iconActive:'boss-active',
        iconTxt: 'Boss',
        component:Boss,
        hide: this.props.user.type == "genius"
      },
      {
        title: 'boss列表',
        path: '/genius',
        icon: 'job',
        iconActive:'job-active',
        iconTxt: '牛人',
        component:Genius,
        hide: this.props.user.type == "boss"
      },
      {
        title: '个人中心',
        path: '/my',
        icon:'user',
        component:My,
        iconActive:'user-active',
        iconTxt: '我的'
      },
      {
        title: '聊天列表',
        path: '/chat',
        icon: 'msg',
        component:Chat,
        iconActive:'msg-active',
        iconTxt: '消息'
      }
    ]
    return (
      <div>
        <NavBar
          icon={< Icon type = "left" onClick = {
            () => this.props.history.go(-1)
          } />}
        >{navList.find(v=>v.path == pathname).title}</NavBar>
        <Switch>
          {navList.map(v=>(
            <Route key={v.path} path={v.path} component={v.component}></Route>
          ))}
        </Switch>
        <FooterBar navList={navList}></FooterBar>
      </div>
    )
  }
}

export default Dashboard
