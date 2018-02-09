/**
 * @Author: yuanmanxue
 * @Date:   2018-02-09 04:38:49
 * @Last modified by:   yuanmanxue
 * @Last modified time: 2018-02-09 05:24:59
 */
import React, {Component} from 'react';
import {Route} from 'react-router'
import {NavBar,TabBar,Icon} from 'antd-mobile'
import '../../App.css'

const TabBarItem = TabBar.Item;
class Dashboard extends React.Component {
  constructor(props){
    super(props)
    this.state={

    }
  }
  render() {
    return (
      <div>
        <NavBar
          icon={<Icon type="left" onClick={() => this.props.history.go(-1)} />}
        >导航栏</NavBar>
        {/* <Route path="/boss" component={Boss}></Route> */}
        <TabBar className="">
          <TabBarItem
            title="聊天"
            key="chat"
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
           data-seed="logId"
           selected={this.state.selectedTab === 'blueTab'}
            icon={
              <div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={
              <div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
            />
            }
          ></TabBarItem>
          <TabBarItem
            title="我的"
            key="my"
            onPress={() => {
              this.setState({
                selectedTab: 'myTab',
              });
            }}
           data-seed="logId"
           selected={this.state.selectedTab === 'myTab'}
            icon={
              <div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={
              <div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
            />
            }
          ></TabBarItem>
        </TabBar>
      </div>
    )
  }
}

export default Dashboard
