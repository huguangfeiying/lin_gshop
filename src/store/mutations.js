/*
* 直接更新state的多个方法的对象
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
import Vue from 'vue'

export default {
  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
  },
  [RECEIVE_CATEGORYS] (state, {categorys}) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS] (state, {shops}) {
    state.shops = shops
  },
  [RECEIVE_USER_INFO] (state, {userInfo}) {
    state.userInfo = userInfo
  },
  [RESET_USER_INFO] (state) {
    state.userInfo = {}
  },
  [RECEIVE_GOODS] (state, shopGoods) {
    state.shopGoods = shopGoods
  },
  [RECEIVE_RATINGS] (state, shopRatings) {
    state.shopRatings = shopRatings
  },
  [RECEIVE_INFO] (state, shopInfo) {
    state.shopInfo = shopInfo
  },
  [INCREMENT_FOOT_COUNT] (state, {food}) {
    if (!food.count) {
      Vue.set(food, 'count', 1)
      state.cartFoods.push(food)
    } else {
      food.count++
    }
  },
  [DECREMENT_FOOT_COUNT] (state, {food}) {
    if (food.count) {
      food.count--
      if (food.count === 0) {
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
      }
    }
  },
  [CLEAR_CART] (state) {
    // 清除food中的count
    state.cartFoods.forEach((food) => { food.count = 0 })
    // 移除购物车所有的购物项
    state.cartFoods = []
  },
  [RECEIVE_SEARCH_SHOPS] (state, searchShops) {
    state.searchShops = searchShops
  }
}
