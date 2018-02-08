/**
 * @Author: yuanmanxue
 * @Date:   2018-02-06 08:56:59
 * @Last modified by:   yuanmanxue
 * @Last modified time: 2018-02-06 02:35:18
 */

import axios from 'axios';
import { Toast } from 'antd-mobile'
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  Toast.loading('加载中...',0)
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    Toast.hide()
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
