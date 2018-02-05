/**
 * @Author: yuanmanxue
 * @Date:   2018-02-02 10:35:33
 * @Last modified by:   yuanmanxue
 * @Last modified time: 2018-02-02 11:30:44
 */

// express使用
// 1.app.get， app.post分别开发接口
// 2.app.use 使用模块
// 3.res.send,res.json.res.sendfile响应不同的内容
const express = require('express');
const app = express();
const mongoose = require('mongoose')
// 连接app 并且使用imooc集合
const DB_URL = 'mongodb://localhost:27017/imooc'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
  console.log('mongobd is connected!');
})

// 类似于mysql的表
const User = mongoose.model('user',new mongoose.Schema({
  user:{type:String,require:true},
  age:{type:Number,require:true}
}))
// 新增数据
User.create({
  user:'yyddddyyy',
  age:23
},function(err,doc){
  if(!err){
    console.log(doc);
  }
    console.log(err);
})

app.get('/',function(req,res){
  res.send('<h1>dadadtetetead</h1>')
})

app.get('/data',function(req,res){
  User.find({
    user:'yyyyy'
  },function(err,doc){
    res.json(doc)
  })
})

app.listen(9000,function(){
  console.log('node start server 9000!');
})
