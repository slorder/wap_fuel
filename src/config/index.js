/**
 * 配置编译环境和线上环境之间的切换
 */

//测试服务器地址
let apiUrl = '';
let imgUrl = '';
let weChatCallBackUrl = '';
let routerMode = 'history';

if (process.env.NODE_ENV == 'development') {
  //开发服务器地址
  apiUrl = '';
  imgUrl = '';
  weChatCallBackUrl = '';
} else if (process.env.NODE_ENV == 'production') {
  //正式服务器地址
  apiUrl = '';
  imgUrl = '';
  weChatCallBackUrl = '';
}

export {apiUrl, imgUrl, weChatCallBackUrl, routerMode}
