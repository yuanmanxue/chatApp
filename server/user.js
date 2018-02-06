/**
 * @Author: yuanmanxue
 * @Date:   2018-02-06 03:06:17
 * @Last modified by:   yuanmanxue
 * @Last modified time: 2018-02-06 03:17:36
 */
 const express = require('express')
 const Router = express.Router()

 Router.get('/info',function(req,res){
   // 用户有没有cookie
   return res.json({
     code:1
   })
 })

module.exports = Router
