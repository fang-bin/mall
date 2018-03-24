<template>
    <div class="details-wrap">
        <goods-head :data="detailsData"></goods-head>
        <div class="price-box">
            <p class="l-price"><span class="rmb-logo">¥</span><span class="now-price">999.00</span></p>
            <p class="r-price">原价：¥1099.00</p>
        </div>
        <ul class="discounts">
            <li @click="discActVisible = showDiscPop = true">
                <p>展业金</p>
                <p>满100可抵70<img src="../../img/m-right.png"></p>
            </li>
            <li @click="discActVisible = true; showDiscPop = false;">
                <p>活动</p>
                <p>国庆大促销，新品特价<img src="../../img/m-right.png"></p>
            </li>
        </ul>
        <div class="goods-detail">
            <div class="choice" @click="specVisible = true">
                <p>选择</p>
                <p>颜色，尺码<img src="../../img/m-right.png"></p>
            </div>
            <ul class="other-detail">
                <li>商品库存：5000件</li>
                <li>运费：包邮/10元起</li>
                <li>销量：300件</li>
            </ul>
        </div>
        <div class="goods-content">
            <div class="sticky-wrap">
                <sticky :check-sticky-support="false" ref="sticky" :offset="46">
                    <tab :line-width="2" default-color="#353535" active-color='#dd2727' v-model="navIndex" bar-active-color="#dd2727" :animate="true">
                        <tab-item v-for="(item, index) in goodsNav" :key="index" @on-item-click="onNavClick">
                            {{item}}
                        </tab-item>
                    </tab>
                </sticky>
            </div>
            <swiper :options="detailSwiper" ref="detailSwiper">
                <swiper-slide v-for="(item,index) in goodsNav" :key="index">
                    I'm Slide {{index}}
                    <img src="https://static.vux.li/demo/1.jpg" v-for="e in 5" :key="e">
                </swiper-slide>
            </swiper>
        </div>
        <ul class="bot-nav">
            <li class="kefu">
                <img src="../../img/d-weixin.png">
            </li>
            <li class="gwc">
                <img src="../../img/d-gwc.png">
            </li>
            <li class="add-cart">加入购物车</li>
            <li class="now-buy">立即购买</li>
        </ul>
        <!-- 规格选择 -->
        <mt-popup
            v-model="specVisible"
            position="bottom"
            :style="{width: '100%'}">
            <spec-box @hideSpec="specVisible = false" :specData="detailsData.spec"></spec-box>
        </mt-popup>
        <!-- 展业金选择 -->
        <mt-popup
          v-model="discActVisible"
          position="right"
          class="right-wrap"
          :style="{width: '90%'}">
          <disc-box @hideDiscAct="discActVisible = false" v-if="showDiscPop"></disc-box>
          <act-box @hideDiscAct ="discActVisible = showDiscPop = false" v-else></act-box>
        </mt-popup>
    </div>
</template>

<script>
import {
  Tab,
  TabItem,
  Sticky,
} from "vux";
import detailsData from "../../data/goods.json";
import specBox from "./specBox";    //弹框--规格
import discBox from "./discBox";    //弹框--展业金
import actBox from './actBox';      //弹框--活动 
import goodsHead from './goodsHead';   //头部内容
const goodsNav = () => ["商品介绍", "规格参数", "购买须知"];
export default {
  data() {
    const that = this;
    return {
      detailsData: detailsData,
      bannerListIndex: 0,
      specVisible: false, //控制规格弹框是否弹出
      discActVisible: false, //控制展业金弹框是否弹出
      showDiscPop: true,   //用来切换，弹框是展示活动还是展业金
      goodsNav: goodsNav(), //商品详情切换列表
      navIndex: 0, //商品详情切换列表默认索引值
      detailSwiper: {
        //商品详情页swiper设置  -->下面的swiper设置
        notNextTick: true,
        initialSlide: this.navIndex,
        autoplay: false,
        loop: false,
        height: '10000',
        on: {
          slideChangeTransitionStart: function() {
            that.navIndex = that.swiper.activeIndex;
          }
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.detailSwiper.swiper;
    }
  },
  props: ["id"],
  methods: {
    onNavClick(index) {
      this.swiper.slideTo(index, 200, false);
    },
    transitionAct(a) {
      console.log("aaa");
    }
  },
  components: {
    Tab,
    TabItem,
    Sticky,
    specBox,
    goodsHead,
    discBox,
    actBox
  }
};
</script>

<style lang="scss" scoped>
@import '../../styles/mixin.scss';
.details-wrap {
  overflow-y: scroll;
  .price-box {
    @include fs;
    background-color: #fff;
    padding: pr(6px) pr(24px) pr(20px);
    height: 20px;
    box-sizing: content-box;
    line-height: 20px;
    .l-price {
      .rmb-logo {
        color: #dd2727;
        font-size: 10px;
        margin-right: 2px;
      }
      .now-price {
        color: #dd2727;
        font-size: 18px;
      }
    }
    .r-price {
      font-size: 10px;
      color: #959595;
      text-decoration: line-through;
    }
  }
  .discounts {
    background-color: #fff;
    margin-top: 1px;
    padding: 0 pr(24px);
    li {
      @include fs;
      line-height: pr(87px);
      height: pr(87px);
      & p:first-child {
        color: #959595;
        font-size: 12px;
      }
      & p:last-child {
        color: #353535;
        font-size: 12px;
        img {
          width: pr(11px);
          height: pr(20px);
          margin-left: pr(24px);
        }
      }
    }
    & li:first-child {
      border-bottom: 1px solid #f5f5f5;
    }
  }
  .goods-detail {
    background-color: #fff;
    padding: 0 pr(24px);
    margin-top: pr(24px);
    .choice {
      @include fs;
      border-bottom: 1px solid #f5f5f5;
      line-height: pr(87px);
      height: pr(87px);
      & p:first-child {
        color: #959595;
        font-size: 12px;
      }
      & p:last-child {
        color: #353535;
        font-size: 12px;
        img {
          width: pr(11px);
          height: pr(20px);
          margin-left: pr(24px);
        }
      }
    }
    .other-detail {
      @include fs;
      color: #959595;
      font-size: 10px;
      height: pr(66px);
      line-height: pr(66px);
      text-align: center;
    }
  }
  .goods-content {
    margin-top: pr(24px);
    background-color: #fff;
    .swiper-slide{
      background-color: #fff;
      overflow: hidden;
      img{
        float: left;
        width: 100%;
        margin: 0;
        padding: 0;
      }
    }
  }
  .bot-nav {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 2;
    height: pr(100px);
    line-height: pr(100px);
    text-align: center;
    display: flex;
    .kefu,
    .gwc {
      width: 14%;
      background-color: #fbfaf7;
      img {
        width: pr(96px);
        height: pr(99px);
      }
    }
    .add-cart,
    .now-buy {
      width: 36%;
      font-size: 14px;
      color: #fff;
      background-color: #ff9600;
    }
    .now-buy {
      background-color: #e3393c;
    }
  }
  .right-wrap{
    height: 100%;
  }
}
</style>
<style>
.vux-number-selector.vux-number-selector {
  float: left;
  height: 20px;
  font-size: 25px;
  line-height: 18px;
  color: #ff9900;
  border: 1px solid #ececec;
}
</style>



