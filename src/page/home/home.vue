<template>
    <div class="index-wrap">
        <!-- 头部 -->
        <div class="top">
            <!-- banner图 -->
            <div class="banner-box">
                <swiper :list="bannerList" v-model="bannerListIndex" :auto="true"></swiper>
            </div>
            <!-- 导航栏 -->
            <ul class="nav-box">
                <li>
                    <router-link to="/mine">
                        <img src="../../img/my-mall.png">
                        <p>我的商城</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="###">
                        <img src="../../img/shopping-car.png">
                        <p>购物车</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="###">
                        <img src="../../img/shopping-card.png">
                        <p>展业金</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="###">
                        <img src="../../img/discounts-card.png">
                        <p>购物卡</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="###">
                        <img src="../../img/shell-exchange.png">
                        <p>贝壳兑换</p>
                    </router-link>
                </li>
            </ul>
        </div>
        <!-- 广告区 -->
        <div class="adv-box">
            <div class="adv-left">
                <img src="../../images/adv01.png">
            </div>
            <div class="adv-right">
                <div>
                    <img src="../../images/adv02.png">
                </div>
                <div>
                    <img src="../../images/adv03.png">
                </div>
            </div>
        </div>
        <div class="module">
            <img src="http://s29.9956.cn/mall/attach/b1/e2f3506e64400ed725a546fae2a696a5.jpg" class="module-img">
            <ul class="goods-list">
                <!-- <li>
                    <router-link to="">
                        <span class="img-box">
                            <img src="http://s29.9956.cn/mall/attach/c0/451655cb48ba5324cc12910a9d113cd4.jpg">
                        </span>
                        <p>糖果型枕全稻壳枕头 保险随手礼</p>
                        <div class="label-box"></div>
                        <div class="num-box">
                            <p class="price">¥ 399.00</p>
                            <p class="sales">销量: 5586</p>
                        </div>
                    </router-link>
                </li> -->
            </ul>
        </div>
    </div>
</template>
<script>
import indexJson from '../../data/home.json'
import { Swiper, SwiperItem } from 'vux'
export default {
    data(){
        return {
            bannerList: indexJson.bannerList,    //banner列表图片  **
            bannerListIndex: 0     //banner首个索引值
        }
    },
    methods: {
        go(){
            this.$message.confirm('是否执行此操作？','警告').then(action =>{
                setTimeout(() => {
                    this.$router.push('/goodDetails');
                }, 1000);
            })
        }
    },
    components: {
        Swiper,
        SwiperItem,
    }
}
</script>

<style lang="scss" scoped>
@import '../../styles/mixin.scss';
.index-wrap{
    overflow-y: scroll;
    .top{
        .banner-box{
            height: pr(340px);
            overflow: hidden;
            img{
                width: 100%;
            }
        }
        .nav-box{
            @include fs(flex-start);
            background-color: #fff;
            li{
                width: 20%;
                height: pr(192px);
                a{
                    @include fs(center);
                    width: 100%;
                    height: 100%;
                    text-align: center;
                    flex-direction: column;
                    align-items: center;
                    p{
                        line-height: 12px;
                        margin-top: pr(19px);
                    }
                    img{
                        height: pr(90px);
                        width: pr(90px);
                    }
                }
            }
        }
    }
    .adv-box{
        margin: pr(24px);
        @include fs;
        div{
            width: pr(340px);
            height: pr(330px);
            overflow: hidden;
            img{
                width: 100%;
            }
        }
        .adv-right{
            @include fs;
            flex-direction: column;
            div{
                width: 100%;
                height: pr(155px);
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
    
}
</style>





