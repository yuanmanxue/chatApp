/**
 * @Author: yuanmanxue
 * @Date:   2018-02-06 03:15:05
 * @Last modified by:   yuanmanxue
 * @Last modified time: 2018-02-10 03:24:55
 */
 const mongoose = require('mongoose')
 // 连接app 并且使用imooc集合
 const DB_URL = 'mongodb://localhost:27017/imooc'
 mongoose.connect(DB_URL)
 mongoose.connection.on('connected',function(){
   console.log('mongobd is connected!');
 })

const models = {
  user:{
    'user':{type:String,require:true},
    'pwd':{type:String,require:true},
    'type':{type:String,require:true},
    'avatar':{type:String},
    'job':{type:String},
    'title':{type:String},
    'desc':{type:String},
    'address':{type:String},
    // boss
    'company':{type:String},
    'money':{type:String},
    'demand':{type:String}
  },
  'chat':{

  }
}

for(let item in models) {
  mongoose.model(item,new mongoose.Schema(models[item]))
}
module.exports = {
  getModel:function(name){
    return mongoose.model(name)
  }
}
