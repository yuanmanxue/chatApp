/**
 * @Author: yuanmanxue
 * @Date:   2018-02-06 03:15:05
 * @Last modified by:   yuanmanxue
 * @Last modified time: 2018-02-06 03:15:07
 */
 const mongoose = require('mongoose')
 // 连接app 并且使用imooc集合
 const DB_URL = 'mongodb://localhost:27017/imooc'
 mongoose.connect(DB_URL)
 mongoose.connection.on('connected',function(){
   console.log('mongobd is connected!');
 })
