/**
 * @Author: yuanmanxue
 * @Date:   2018-02-01 05:42:42
 * @Last modified by:   yuanmanxue
 * @Last modified time: 2018-02-02 03:29:24
 */

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';
import { Button } from 'antd-mobile';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {name:'yyyyy'}
  }
  getInitialState() {

  }
  componentWillMount(preState){
    this.setState({name:'yyyyy2'})
  }
  render(){
    return (
      <div>
        <Button type='primary'>按钮</Button>
      </div>
    )
  }
  componentDidMount() {
    console.log('组件马上加载');
  }
  componentWillReceiveProps(nextProps) {

  }
  shouldComponentUpdate(nextProps, nextState) {

  }
  componentWillUpdate(){

  }
  componentDidUpdate(){

  }
  conponentWillUnmount(){

  }
}
export default App;
