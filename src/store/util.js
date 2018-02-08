/**
 * @Author: yuanmanxue
 * @Date:   2018-02-07 05:08:36
 * @Last modified by:   yuanmanxue
 * @Last modified time: 2018-02-07 05:35:45
 */

 export function getRedirectPath({type,avatar}){
 	// 根据用户信息 返回跳转地址
 	// user.type /boss /genius
 	// user.avatar /bossinfo /geniusinfo
 	let url = (type==='boss')?'/boss': '/genius'
 	if (!avatar) {
 		url += 'info'
 	}
  console.log(type)
 	return url
 }
