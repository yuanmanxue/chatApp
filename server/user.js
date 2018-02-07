/**
 * @Author: yuanmanxue
 * @Date:   2018-02-06 03:06:17
 * @Last modified by:   yuanmanxue
 * @Last modified time: 2018-02-07 05:19:04
 */
const express = require('express')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')
Router.get('/list', function(req, res) {
  User.find({}, function(err, doc) {
    return res.json(doc)
  })
})
Router.post('/register',function(req,res) {
  console.log(req.body)
  const {user,pwd,type} = req.body
  User.findOne({user:user},function(err,doc) {
    if(doc) {
      return res.json({
        code:1,
        msg:'用户名重复'
      })
    }
    User.create({user,pwd,type},function(err,doc) {
        if(err) {
          return res.json({
            code:1,
            msg:'后端数据操作失误'
          })
        }
        return res.json({
          code:0
        })
      })
  })
})
Router.post('/login',function(req,res){
  const {user,pwd} = req.body
  console.log(req.body)
  User.findOne({user},function(err,doc){
    console.log(doc)
    if(doc) {
      if(doc.pwd == pwd) {
        return res.json({
          code:0,
          data:doc
        })
      }
    } else {
      return res.json({
        code:1,
        msg:'输入的密码不存在或者错误'
      })
    }
  })
})
Router.get('/info', function(req, res) {
  // 用户有没有cookie
  return res.json({code: 1})
})

module.exports = Router
