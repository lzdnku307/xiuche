<template>
  <div class="index-content">
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in swipeImages" :key="index">
        <img v-lazy="image" class="swipe-image-item"/>
      </van-swipe-item>
    </van-swipe>

    <!-- 功能导航 -->
    <van-grid :border="false" :column-num="4" class="func">
      <van-grid-item v-for="item in funcItems" :key="item.name">
        <van-image :src="item.image" class="func-image" />
        <span class="func-name">{{ item.name }}</span>
      </van-grid-item>
    </van-grid>
    <news title="公司新闻" :list="news"/>
    <news title="公司公告" :list="news"/>
  </div>
</template>
<script>
    import { Swipe, SwipeItem, Grid, GridItem } from 'vant';
    import FuncImage1 from '@/assets/images/index_1.png';
    import FuncImage2 from '@/assets/images/index_2.png';
    import FuncImage3 from '@/assets/images/index_3.png';
    import FuncImage4 from '@/assets/images/index_4.png';
    import News from '@/components/news';

    export default {
        layout: 'app',
        name: 'home',
        components: {
            [Swipe.name]: Swipe,
            [SwipeItem.name]: SwipeItem,
            [GridItem.name]: GridItem,
            [Grid.name]: Grid,
            News,
        },
        data() {
            return {
                swipeImages: [
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg'
                ],
                funcItems: [{
                    name: '公司介绍',
                    image: FuncImage1
                }, {
                    name: '团队介绍',
                    image: FuncImage2
                }, {
                    name: '业务领域',
                    image: FuncImage3
                }, {
                    name: '行业资讯',
                    image: FuncImage4
                }],
                news: [{
                    id: 1,
                    title: '马斯克内部信全文：欲总价713亿美元私有化特斯拉',
                    date: '2018-08-08 09:37',
                    image: 'http://wj03.assetman.cn/xctz/mw_news/201808/1533692794941_GwHRF.png'
                }, {
                    id: 2,
                    title: '马斯克内部信全文：欲总价713亿美元私有化特斯拉',
                    date: '2018-08-08 09:37',
                    image: 'http://wj03.assetman.cn/xctz/mw_news/201808/1533692794941_GwHRF.png'
                }, {
                    id: 3,
                    title: '马斯克内部信全文：欲总价713亿美元私有化特斯拉',
                    date: '2018-08-08 09:37',
                    image: 'http://wj03.assetman.cn/xctz/mw_news/201808/1533692794941_GwHRF.png'
                }, {
                    id: 4,
                    title: '马斯克内部信全文：欲总价713亿美元私有化特斯拉',
                    date: '2018-08-08 09:37',
                    image: 'http://wj03.assetman.cn/xctz/mw_news/201808/1533692794941_GwHRF.png'
                }]
            }
        },
    }
</script>
<style lang="scss" scoped>
  @import '~assets/css/variables';
  @import '~assets/css/func';

  .index-content {

  }

  .swipe-image-item {
    width: 100%;
    height: pxToRem(360px);
  }

  .func {
    background: #FFF;
    margin: pxToRem(10px) 0;
  }

  .func-image {
    width: pxToRem(96px);
    height: pxToRem(96px);
  }

  .func-name {
    font-size: pxToRem(28px);
    color: #333333;
    margin-top: pxToRem(20px);
    font-weight: bolder;
  }
</style>