/*
* 路由器对象
* */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../pages/Login/Login'
import UserInfo from '../pages/UserInfo/UserInfo'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods'
import Shop from '../pages/Shop/Shop'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'

// import MSite from '../pages/MSite/MSite.vue'
// import Search from '../pages/Search/Search.vue'
// import Order from '../pages/Order/Order.vue'
// import Profile from '../pages/Profile/Profile.vue'
const MSite = () => import('../pages/MSite/MSite.vue')
const Search = () => import('../pages/Search/Search.vue')
const Order = () => import('../pages/Order/Order.vue')
const Profile = () => import('../pages/Profile/Profile.vue')

// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  // 所有路由
  routes: [
    {
      path: '/msite',
      component: MSite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/userInfo',
      component: UserInfo
    },
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/shop',
      component: Shop,
      children: [
        {
          path: 'goods',
          component: ShopGoods
        },
        {
          path: 'ratings',
          component: ShopRatings
        },
        {
          path: 'info',
          component: ShopInfo
        },
        {
          path: '',
          redirect: 'goods'
        }
      ]
    }
  ]
})
