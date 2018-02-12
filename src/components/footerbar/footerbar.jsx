/**
 * @Author: yuanmanxue
 * @Date:   2018-02-10 09:53:12
 * @Last modified by:   yuanmanxue
 * @Last modified time: 2018-02-11 10:23:00
 */
import React from 'react'
import {TabBar} from 'antd-mobile'
import {withRouter} from 'react-router-dom'

const Item = TabBar.Item
@withRouter
class FooterBar extends React.Component {
  render () {
    const pathname = this.props.history.location.pathname
    const navList = this.props.navList.filter(v=>!v.hide)
    return (
      <TabBar>
        {navList.map(v=>(<Item
          title={v.iconTxt}
          key={v.icon}
          icon={{ uri:require(`./img/${v.icon}.png`) }}
          selectedIcon={{ uri:require(`./img/${v.iconActive}.png`) }}
          selected={pathname===v.path}
          onPress={()=>{
            this.props.history.push(v.path)
          }}
          ></Item>))}
      </TabBar>
    )
  }
}

export default FooterBar;
