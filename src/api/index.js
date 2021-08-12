import ajax from './ajax'
// 1、根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)
// 2、获取食品分类列表
export const reqFoodTypes = () => ajax('/ndex_category')
// 3、根据经纬度获取商铺列表
export const reqShops = (longitude, latitude) => ajax(`/shops?latitude=${latitude}&longitude=${longitude}`)
// 4、根据经纬度和关键字搜索商铺列表
export const reqSearchShop = ({longitude, latitude}, keyword) => ajax(`search_shops?keyword=${keyword}&geohash=${latitude},${longitude}`)
// 5、获取一次性验证码
export const reqCaptcha = () => ajax('captcha')
// 6、用户名密码登陆
export const reqPwdLogin = (data) => ajax('/login_pwd', data, 'POST')
// 7、发送短信验证码
export const reqSendCode = (phone) => ajax(`/sendcode?${phone}`)
// 8、手机号验证码登陆
export const reqSmsLogin = (data) => ajax('login_sms', data, 'POST')
// 9、根据会话获取用户信息
export const reqUserInfo = () => ajax('userinfo')
// 10、用户登出
export const reqLogout = () => ajax('/logout')
