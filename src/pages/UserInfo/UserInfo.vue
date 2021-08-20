<template>
  <div class="container">
    <a href="javascript:" class="go_back" @click="$router.back()">
      <i class="iconfont icon-jiantou2"></i>
    </a>
    <div class="title">用户中心</div>
    <div class="user">用户：{{ userInfo.name || userInfo.phone }}</div>

    <div class="wrapper">
      <ul class="content">
        <li v-for="(shopRating, index) in shopRatings" :key="index">
          <p>{{shopRating.username}}</p>
          <p>{{shopRating.text}}</p>
        </li>
      </ul>
      <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import BScroll from 'better-scroll'

export default {
  computed: {
    ...mapState(['userInfo', 'shopRatings'])
  },
  mounted () {
    this.getShopRatings(() => {
      this.$nextTick(() => {
        // eslint-disable-next-line no-new
        new BScroll('')
      })
    })
    // eslint-disable-next-line no-new
    new BScroll('.wrapper')
  },
  methods: {
    ...mapActions(['getShopRatings'])
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.container
  position relative
  a
    display block

    i
      .iconfont
        font-size 20px
        color #999

  .title
    text-align center
    height 50px
    font bold 25px / 50px '华文楷体'

  .user
    margin-top 20px
    font bold 20px / 20px '华文楷体'

  .wrapper
    height 500px
    background-color gainsboro
    overflow hidden
    .content
      height 1500px
      background-color beige
      li
        border-bottom 1px solid salmon
        margin-top 20px
</style>
