/**
 * @Author: yuanmanxue
 * @Date:   2018-02-10 09:41:14
 * @Last modified by:   yuanmanxue
 * @Last modified time: 2018-02-11 01:43:55
 */
import React from 'react'
import {connect} from 'react-redux'
import {Result, Icon, WhiteSpace,List} from 'antd-mobile';
import {loginOutSubmit} from '../../store/user.redux'
import browserCookie from 'browser-cookies'
import {Redirect} from 'react-router-dom'

@connect(state=>state.user,{loginOutSubmit})
class  My extends React.Component {
  constructor(props){
    super(props)
    this.state={}
    this.loginOut = this.loginOut.bind(this)
  }
  loginOut(){
    browserCookie.erase('userid')
  }
  render () {
    const Item = List.Item;
    const Brief = Item.Brief;
    return (
      this.props.user ? (
        <div style={{marginTop:45}} className="result-example">
          {this.props.redirectTo ? (<Redirect to={this.props.redirectTo}></Redirect>) : null}
          <Result
            img={<img src={require(`../img/${this.props.avatar}.png`)} style={{width:50}} alt="" />}
            title={this.props.user}
            message={<div>{this.props.desc}</div>}
          />
          <WhiteSpace />
        <List>
          <Item>{this.props.job}</Item>
        {this.props.demand ? (<Item multipleLine wrap>要求：{this.props.demand.split('\n').map(item=>(<div key={item}>{item}</div>))}</Item>) : null}
          <Item>薪资：{this.props.money}</Item>
          <Item>坐标：{this.props.address}</Item>
      </List>
        <WhiteSpace />
      <List>
        <Item onClick={this.loginOut}>退出登录</Item>
      </List>
        </div>
      ) : null
    )
  }
}

export default My;
