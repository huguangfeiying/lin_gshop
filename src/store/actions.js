/*
*通过mutations间接更新state的多个方法的对象
* */
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  INCREMENT_FOOT_COUNT,
  DECREMENT_FOOT_COUNT,
  CLEAR_CART,
  RECEIVE_SEARCH_SHOPS
} from './mutation-types'
import {
  reqAddress,
  reqFoodCategorys,
  reqShops,
  reqUserInfo,
  reqLogout,
  reqShopInfo,
  reqShopGoods,
  reqShopRatings,
  reqSearchShop
} from '../api'

export default {
  // 异步获取地址
  async getAddress (store) {
    // 发送异步请求
    const geohash = store.state.latitude + ',' + store.state.longitude
    const result = await reqAddress(geohash)
    if (result.code === 0) {
      const address = result.data
      store.commit(RECEIVE_ADDRESS, {address})
    }
  },
  // 异步获取食物分类列表
  async getCategorys (store) {
    // 发送异步请求
    const result = await reqFoodCategorys()
    if (result.code === 0) {
      const categorys = result.data
      store.commit(RECEIVE_CATEGORYS, {categorys})
    }
  },
  // 异步获取商家列表
  async getShops (store) {
    // 发送异步请求
    const {longitude, latitude} = store.state
    const result = await reqShops(longitude, latitude)
    if (result.code === 0) {
      const shops = result.data
      store.commit(RECEIVE_SHOPS, {shops})
    }
  },
  // 同步记录用户信息
  recordUser (store, userInfo) {
    store.commit(RECEIVE_USER_INFO, {userInfo})
  },
  // 异步获取用户信息
  async getUserInfo (store) {
    const result = await reqUserInfo()
    if (result.code === 0) {
      const userInfo = result.data
      store.commit(RECEIVE_USER_INFO, {userInfo})
    }
  },
  // 异步登出
  async logout (store) {
    const result = await reqLogout()
    if (result.code === 0) {
      store.commit(RESET_USER_INFO)
    }
  },
  // 异步获取商品信息
  async getShopGoods (store, callback) {
    const result = await reqShopGoods()
    if (result.code === 0) {
      const shopGoods = result.data
      store.commit(RECEIVE_GOODS, shopGoods)
      // 数据更新了，通知一下组件
      callback && callback()
    }
  },
  // 异步商家评价数组
  async getShopRatings (store, callback) {
    const result = await reqShopRatings()
    if (result.code === 0) {
      const shopRatings = result.data
      store.commit(RECEIVE_RATINGS, shopRatings)
      // 数据更新了，通知一下组件
      callback && callback()
    }
  },
  // 异步获取商家信息
  async getShopInfo (store) {
    const result = await reqShopInfo()
    if (result.code === 0) {
      const shopInfo = result.data
      store.commit(RECEIVE_INFO, shopInfo)
    }
  },
  // 同步更新food中的count值
  updateFoodCount (store, {isAdd, food}) {
    if (isAdd) {
      store.commit(INCREMENT_FOOT_COUNT, {food})
    } else {
      store.commit(DECREMENT_FOOT_COUNT, {food})
    }
  },
  // 同步清空购物车
  clearCart ({commit}) {
    commit(CLEAR_CART)
  },
  // 异步获取商家信息
  async getSearchShops (store, keyword) {
    const geohash = store.state.latitude + ',' + store.state.longitude
    const result = await reqSearchShop(geohash, keyword)
    if (result.code === 0) {
      const searchShops = result.data
      store.commit(RECEIVE_SEARCH_SHOPS, searchShops)
    }
  }
}
