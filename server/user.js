/**
 * @Author: yuanmanxue
 * @Date:   2018-02-06 03:06:17
 * @Last modified by:   yuanmanxue
 * @Last modified time: 2018-02-10 03:58:05
 */
const express = require('express')
// md5加密库
const utils = require('utility')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')
// 设置pwd返回不显示
const _filter = {'pwd':0,'__v':0}

Router.get('/list', function(req, res) {
  const {type} = req.query
  User.find({type}, function(err, doc) {
    return res.json({code:0,data:doc})
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
    const userModel = new User({user,type,pwd:md5Pwd(pwd)})
    userModel.save(function(e,d){
      if (e) {
        return res.json({code:1,msg:'后端出错了'})
      }
      const {user, type, _id} = d
      res.cookie('userid', _id)
      return res.json({code:0,data:{user, type, _id}})
    })
  })
})
Router.post('/login',function(req,res){
  const {user,pwd} = req.body
  console.log(req.body)
  User.findOne({user,pwd:md5Pwd(pwd)},_filter,function(err,doc){
    if(!doc) {
      return res.json({code:1,msg:'用户名或者密码错误'})
    }
    res.cookie('userid', doc._id)
		return res.json({code:0,data:doc})
  })
})
Router.post('/update',function(req,res){
	const userid = req.cookies.userid
	if (!userid) {
		return res.json({code:1})
	}
	const body = req.body
	User.findByIdAndUpdate(userid,body,function(err,doc){
		const data = Object.assign({},{
			user:doc.user,
			type:doc.type
		},body)
    console.log(doc)
		return res.json({code:0,data})
	})
})


Router.get('/info',function(req, res){
	const {userid} = req.cookies
	if (!userid) {
		return res.json({code:1,msg:'没有cookie'})
	}
	User.findOne({_id:userid} ,_filter , function(err,doc){
		if (err) {
			return res.json({code:1, msg:'后端出错了'})
		}
		if (doc) {
			return res.json({code:0,data:doc})
		}
	})
	// 用户有没有cookie

})

 // 两层md5加salt的方式来加密
  function md5Pwd(pwd){
  	const salt = 'imooc_is_good_3957x8yza6!@#IUHJh~~'
  	return utils.md5(utils.md5(pwd+salt))
  }

module.exports = Router
