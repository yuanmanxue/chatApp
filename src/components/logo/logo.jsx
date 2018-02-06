/**
 * @Author: yuanmanxue
 * @Date:   2018-02-06 02:06:27
 * @Last modified by:   yuanmanxue
 * @Last modified time: 2018-02-06 02:26:56
 */

import React, { Component } from 'react';
import LogoImage from './job.png';
import './logo.css'
class Logo extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className="logo-container">
        <img src={LogoImage} alt="logo"/>
      </div>
    )
  }
}

export default Logo
