/**
 * @Author: yuanmanxue
 * @Date:   2018-02-07 03:50:34
 * @Last modified by:   yuanmanxue
 * @Last modified time: 2018-02-08 04:28:50
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {update} from '../../store/user.redux.js'
import {
  List,
  NavBar,
  Icon,
  InputItem,
  WhiteSpace,
  TextareaItem,
  Button,
  WingBlank
} from 'antd-mobile'

import AvatarSelect from '../../components/avatar-select/avatar-select.jsx'
@connect(state => state.user,{update})
class BossInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      job:'',
      money:'',
      desc:'',
      address:'',
      demand:''
    }
  }
  onChange(key, value) {
    this.setState({[key]: value})
  }
  render() {
    return (
      <List>
        <NavBar icon={< Icon type = "left" size = 'lg' />}>BOSS信息完善</NavBar>
        <AvatarSelect avatar={this.state.avatar} handleSelect={(imgname) => {
          this.setState({avatar: imgname})
        }}></AvatarSelect>
        <WingBlank>
          <WhiteSpace/>
          <InputItem onChange={v => this.onChange('job', v)}>招聘职位：</InputItem>
          <WhiteSpace/>
          <InputItem onChange={v => this.onChange('money', v)}>职位薪资：</InputItem>
          <WhiteSpace/>
          <InputItem onChange={v => this.onChange('address', v)}>公司地点：</InputItem>
          <WhiteSpace/>
          <TextareaItem title="职位要求：" rows={4} autoHeight='true' onChange={v => this.onChange('demand', v)}></TextareaItem>
          <WhiteSpace/>
          <TextareaItem title="公司简介：" rows={4} autoHeight='true' onChange={v => this.onChange('desc', v)}></TextareaItem>
          <WhiteSpace size="xl"/>
        <Button type="primary" onClick={()=>this.props.update(this.state)}>保存</Button>
          <WhiteSpace size="xl"/>
        </WingBlank>
      </List>
    )
  }
}

export default BossInfo
