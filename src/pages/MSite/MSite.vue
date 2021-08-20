<template>
  <section class="msite">
    <!--首页头部-->
    <HeaderTop :title="address.name">
      <router-link to="/search" class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link :to="userInfo._id ? '/userInfo' : '/login'" class="header_login" slot="right">
        <span class="header_login_text" v-if="!userInfo._id">
          登录|注册
        </span>
        <span class="header_login_text" v-else>
          <i class="iconfont icon-person"></i>
        </span>
      </router-link>
    </HeaderTop>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container" v-if="categorys.length">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorys, index) in categorysArr" :key="index">
            <a class="link_to_food" href="javascript:" v-for="(category, index) in categorys" :key="index">
              <div class="food_container">
                <img :src="baseImageUrl+category.image_url" alt="分类">
              </div>
              <span>{{ category.title }}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <img src="./images/msite_back.svg" alt="back" v-else>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList/>
    </div>
  </section>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import HeaderTop from '../../components/HeaderTop/HeaderTop'
import ShopList from '../../components/ShopList/ShopList'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

export default {
  data () {
    return {
      baseImageUrl: 'https://fuss10.elemecdn.com'
    }
  },
  mounted () {
    this.getCategorys()
    this.getShops()
  },
  methods: {
    ...mapActions(['getCategorys', 'getShops'])
  },
  computed: {
    ...mapState(['address', 'categorys', 'userInfo']),

    categorysArr () {
      const {categorys} = this
      // 准备空的二维数组
      const arr = []
      let minarr = []
      // 遍历categorys
      categorys.forEach(c => {
        minarr.push(c)
        if (minarr.length === 8) {
          arr.push(minarr)
          minarr = []
        }
      })
      if (minarr.length > 0) {
        arr.push(minarr)
      }
      return arr
    }
  },
  watch: {
    categorys () {
      this.$nextTick(() => {
        // 创建一个Swiper对象，来实现轮播
        // eslint-disable-next-line no-new
        new Swiper('.swiper-container', {
          direction: 'horizontal', // 垂直切换选项
          loop: true, // 循环模式选项
          autoplay: true,

          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination'
          }
        })
      })
    }
  },
  components: {
    HeaderTop,
    ShopList
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.msite //首页
  width 100%
  margin-bottom 50px
  overflow hidden

  .msite_nav
    bottom-border-1px(#e4e4e4)
    margin-top 45px
    height 200px
    background #fff

    .swiper-container
      width 100%
      height 100%

      .swiper-wrapper
        width 100%
        height 100%

        .swiper-slide
          display flex
          justify-content center
          align-items flex-start
          flex-wrap wrap

          .link_to_food
            width 25%

            .food_container
              display block
              width 100%
              text-align center
              padding-bottom 10px
              font-size 0

              img
                display inline-block
                width 50px
                height 50px

            span
              display block
              width 100%
              text-align center
              font-size 13px
              color #666

  //.swiper-pagination
  //  > span.swiper-pagination-bullet-active
  //    background #02a774

  .msite_shop_list
    top-border-1px(#e4e4e4)
    margin-top 10px
    background #fff

    .shop_header
      padding 10px 10px 0

      .shop_icon
        margin-left 5px
        color #999

      .shop_header_title
        color #999
        font-size 14px
        line-height 20px
</style>
