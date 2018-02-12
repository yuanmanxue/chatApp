/**
 * @Author: yuanmanxue
 * @Date:   2018-02-07 03:50:34
 * @Last modified by:   yuanmanxue
 * @Last modified time: 2018-02-10 09:26:12
 */
import React, {Component} from 'react';
import { Grid,List,Icon,ImagePicker,WhiteSpace } from 'antd-mobile'
import './avatar.css'

class AvatarSelect extends React.Component{
  constructor(props) {
    super(props)
    this.state={}
  }
  onChange = (files) => {
    console.log(files)
    this.setState({
      text:files[0].file.name,
      icon:files[0].url
    });
  };
  render(){
    const Item = List.Item;
    const data = 'boy,bull,chick,crab,girl,hedgehog,hippopotamus,koala,lemur,man,pig,tiger,whale,woman,zebra'.split(',').map(item=>({
        text:item,
        icon:require(`../img/${item}.png`)
      }))
    const gridHearder = this.state.icon ? (<div className="avatar-select">已选择头像:<img src={this.state.icon} alt=""/></div>) :  (<div className="avatar-select">请选择头像：</div>)
    const { files } = this.state;
    return (
      <List renderHeader={()=>gridHearder} style={{marginTop:45}}>
        {/* <WhiteSpace /> */}
          {/* <ImagePicker
              files={files}
              multiple={false}
              onChange={files => {
                this.onChange(files)
                this.props.handleSelect(files[0].file.name)
              }}
            />
          <WhiteSpace /> */}
        <Grid data={data} onClick={elm =>{
            this.setState(elm)
            this.props.handleSelect(elm.text)}
          } columnNum={4}>
        </Grid>
      </List>
    )
  }
}

export default AvatarSelect
