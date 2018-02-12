/**
 * @Author: yuanmanxue
 * @Date:   2018-02-10 04:04:59
 * @Last modified by:   yuanmanxue
 * @Last modified time: 2018-02-10 05:09:40
 */
import React from 'react'
import {Card, WhiteSpace, WingBlank} from 'antd-mobile'

class UserList extends React.Component {
  render() {
    const Header = Card.Header
    const Body = Card.Body
    const Footer = Card.Footer
    return (
      <WingBlank>
        <WhiteSpace/> {this.props.userlist.map(v => (
          <Card key={v._id}>
            <Header
              title={v.user} thumb={require(`../img/${v.avatar}.png`)}
              extra={< span > {v.job} < /span>}></Header>
            <Body>
              <div>薪资：{v.money}</div>
              {v.demand ? v.demand.split('\n').map(item=>(<div key={item}>{item}</div>)):null }
              {v.desc ? (<div>公司简介：{v.desc}</div>) : null}
            </Body>
            <Footer content={v.address}></Footer>
            <WhiteSpace/>
          </Card>
        ))}
        <WhiteSpace/>
      </WingBlank>
    )
  }
}

export default UserList
