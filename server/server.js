/**
 * @Author: yuanmanxue
 * @Date:   2018-02-02 10:35:33
 * @Last modified by:   yuanmanxue
 * @Last modified time: 2018-02-07 03:26:25
 */

// express使用
// 1.app.get， app.post分别开发接口
// 2.app.use 使用模块
// 3.res.send,res.json.res.sendfile响应不同的内容
const express = require('express')
const userRouter = require('./user')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express();
// 中间件
app.use(bodyParser.json())
app.use(cookieParser())
app.use('/user',userRouter)
app.get('/',function(req,res){
  res.send('<h1>fff</h1>')
})
app.listen(9000,function(){
  console.log('node start server 9000!');
})
