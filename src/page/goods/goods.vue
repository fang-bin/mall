<template>
    <div class="details-wrap">
        <div class="banner-box">
            <swiper :options="bannerSwiper" ref="bannerSwiper">
                <swiper-slide v-for="(item,index) in bannerList" :key="index">
                    <img :src="item.img">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
        <div class="tit-box">
            <h1>Philips/飞利浦空气净化器AC4076家用除甲醛雾霾烟尘PM2.5杀菌</h1>
            <p>新国标之选 高效滤网 除雾霾甲醛 夜间静音模式</p>
        </div>
        <div class="price-box">
            <p class="l-price"><span class="rmb-logo">¥</span><span class="now-price">999.00</span></p>
            <p class="r-price">原价：¥1099.00</p>
        </div>
        <ul class="discounts">
            <li>
                <p>展业金</p>
                <p>满100可抵70<img src="../../img/m-right.png"></p>
            </li>
            <li>
                <p>活动</p>
                <p>国庆大促销，新品特价<img src="../../img/m-right.png"></p>
            </li>
        </ul>
        <div class="goods-detail">
            <div class="choice" @click="showPop">
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
                <sticky :check-sticky-support="false">
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
                    <p style="height: 10px;"></p>
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
        <mt-popup
            v-model="popupVisible"
            position="bottom"
            :style="{width: '100%'}">
            <spec-box @hidePop="hidePop"></spec-box>
        </mt-popup>
    </div>
</template>

<script>
import { Tab, TabItem, Sticky, Checker, CheckerItem, XNumber, Group, Cell } from 'vux'
import detailsData from '../../data/goods.json'
import specBox from './specBox';
const goodsNav = () => ['商品介绍','规格参数','购买须知'];
export default {
    data(){
        const that = this;
        return {
            bannerList: detailsData.bannerList,
            bannerListIndex: 0,
            popupVisible: false,    //控制购买弹框是否弹出
            goodsNav: goodsNav(),   //商品详情切换列表
            navIndex: 0,   //商品详情切换列表默认索引值
            bannerSwiper:{
                notNextTick: true,
                autoplay: true,
                // effect:"coverflow",
                // grabCursor : true,
                loop: true,
                setWrapperSize :true,
                pagination: {
                    el: '.swiper-pagination'
                },
                paginationClickable :true,
                mousewheelControl : true,
                observeParents:true,
            },
            detailSwiper: {    //商品详情页swiper设置  -->下面的swiper设置
                notNextTick: true,
                initialSlide: this.navIndex,
                autoplay: false,
                loop: false,
                height: 10000,
                on: {
                    slideChangeTransitionStart: function(){
                        that.navIndex = that.swiper.activeIndex;
                    }
                } 
            },
        }
    },
    computed: {
        swiper(){
            return this.$refs.detailSwiper.swiper;
        }
    },
    props: ['id'],
    methods: {
        showPop(){
            this.popupVisible = true;
        },
        hidePop(){
            this.popupVisible = false;
        },
        onNavClick(index){
            this.swiper.slideTo(index,200,false);
        },
        transitionAct(a){
            console.log('aaa');
        }
    },
    components: {
        Tab,
        TabItem,
        Sticky,
        Checker,
        CheckerItem,
        XNumber,
        Group,
        Cell,
        specBox
    }
}
</script>

<style lang="scss" scoped>
@function pr($px) {
    @return $px / 75px * 1rem;
}
.details-wrap{
    overflow-y: scroll;
    .tit-box{
        background-color: #fff;
        padding: 0 pr(24px);
        text-align: justify;
        h1{
            font-size: 15px;
            line-height: 18px;
            padding-top: pr(24px);
        }
        p{
            font-size: 12px;
            color: #dd2727;
            line-height: 18px;
            margin-top: pr(10px);
            padding-bottom: pr(12px);
        }
    }
    .price-box{
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        padding: pr(6px) pr(24px) pr(20px);
        height: 20px;
        box-sizing: content-box;
        line-height: 20px;
        .l-price{
            .rmb-logo{
                color: #dd2727;
                font-size: 10px;
                margin-right: 2px;
            }
            .now-price{
                color: #dd2727;
                font-size: 18px;
            }
        }
        .r-price{
            font-size: 10px;
            color: #959595;
            text-decoration: line-through;
        }
    }
    .discounts{
        background-color: #fff;
        margin-top: 1px;
        padding: 0 pr(24px);
        li{
            display: flex;
            justify-content: space-between;
            line-height: pr(87px);
            height: pr(87px);
            & p:first-child{
                color: #959595;
                font-size: 12px;
            }
            & p:last-child{
                color: #353535;
                font-size: 12px;
                img{
                    width: pr(11px);
                    height: pr(20px);
                    margin-left: pr(24px);
                }
            }
        }
        & li:first-child{
            border-bottom: 1px solid #f5f5f5;
        }
    }
    .goods-detail{
        background-color: #fff;
        padding: 0 pr(24px);
        margin-top: pr(24px);
        .choice{
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #f5f5f5;
            line-height: pr(87px);
            height: pr(87px);
            & p:first-child{
                color: #959595;
                font-size: 12px;
            }
            & p:last-child{
                color: #353535;
                font-size: 12px;
                img{
                    width: pr(11px);
                    height: pr(20px);
                    margin-left: pr(24px);
                }
            }
        }
        .other-detail{
            color: #959595;
            font-size: 10px;
            height: pr(66px);
            line-height: pr(66px);
            display: flex;
            justify-content: space-between;
            text-align: center;
        }
    }
    .goods-content{
        margin-top: pr(24px);
        background-color: #fff;
        .sticky-wrap{
            height: pr(88px);
        }
    }
    .bot-nav{
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        height: pr(100px);
        line-height: pr(100px);
        text-align: center;
        display: flex;
        .kefu,.gwc{
            width: 14%;
            background-color: #fbfaf7;
            img{
                width: pr(96px);
                height: pr(99px);
            }
        }
        .add-cart,.now-buy{
            width: 36%;
            font-size: 14px;
            color: #fff;
            background-color: #ff9600;
        }
        .now-buy{
            background-color: #e3393c;
        }
    }
}
</style>
<style>
.vux-number-selector.vux-number-selector {
    float: left;
    height: 20px;
    font-size: 25px;
    line-height: 18px;
    color: #FF9900;
    border: 1px solid #ececec;
}
</style>



