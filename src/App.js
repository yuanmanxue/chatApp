/**
 * @Author: yuanmanxue
 * @Date:   2018-02-01 05:42:42
 * @Last modified by:   yuanmanxue
 * @Last modified time: 2018-02-02 03:29:24
 */

import React, { Component } from 'react';
import './App.css';
import { Button } from 'antd-mobile';
import { connect } from 'react-redux';

class App extends React.Component {
  render(){
    return (
      <div>
        <Button type='primary'>Add</Button>
        <Button type='primary'>Decrease</Button>
      </div>
    )
  }
  componentDidMount() {
    console.log('组件马上加载');
  }
}
export default App
