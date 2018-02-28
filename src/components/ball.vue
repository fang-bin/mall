<template>
<div>
    <div class="i-pendant" id="pendant" ref="pendant">
        <img src="../common/img/feiji0.gif" class="feiji0" ref="feiji0"/>
        <img src="../common/img/feiji1.gif" class="feiji1" ref="feiji1"/>
    </div>
    <ul class="menu" ref="menu">
        <li>
            <router-link to="###">
                <img src="../common/img/go_zhuye.png">
            </router-link>
        </li>
        <li>
            <router-link to="###">
                <img src="../common/img/go_gerenzhongxin.png">
            </router-link>
        </li>
        <li>
            <router-link to="###">
                <img src="../common/img/go_gouwuche.png">
            </router-link>
        </li>
        <li>
            <router-link to="###">
                <img src="../common/img/go_dingdan.png">
            </router-link>
        </li>
        <li>
            <router-link to="###">
                <img src="../common/img/go_gouwuka.png">
            </router-link>
        </li>
        <li>
            <router-link to="###">
                <img src="../common/img/go_shopcard.png">
            </router-link>
        </li>
        <li>
            <router-link to="###">
                <img src="../common/img/go_weixin.png">
            </router-link>
        </li>
    </ul>
    <div class="kefu">
        <img src="../common/img/weixinkefu.png"/>
        <p>微信客服 : tangdouservice123</p>
    </div>
</div>
</template>

<script>
import BallAni from '../common/js/ball.animate.js';
export default {
	mounted(){
			const pendant = this.$refs.pendant,
				menu = this.$refs.menu,
				feiji0 = this.$refs.feiji0,
				feiji1 = this.$refs.feiji1;
			BallAni(pendant,menu,feiji0,feiji1);
		// 注意： 通过this.$refs去获取dom,需要在组件装载之后，才可以！！！！！！！！！！！！！！
	}
}
</script>
<style lang="scss" scoped>
@import "../common/css/pxToRem.scss";
@function pr($px) {
    @return $px / 75px * 1rem;
}
.i-pendant {
	z-index: 2;
	width: pr(100px);
	height: pr(100px);
	background: #333333;
	position: fixed;
	transition-property: right;
	transition-timing-function: ease-in-out;
	text-align: center;
	line-height: pr(100px);
	background-color: #959595;
	overflow: hidden;
}
.i-pendant img{
	width: 100%;
}
.menu li{
	float: left;
	width: pr(100px);
	height: pr(100px);
	position: relative;
}
.menu li img{
	width: 100%;
	height: 100%;
}
.menu{
	z-index: 2;
	background-color: #333333;
	width: pr(400px);
	height: pr(200px);
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	overflow: hidden;
	box-sizing: border-box;
	position: fixed;
	transition-property: right;
	transition-timing-function: ease-in-out;
}
.kefu{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,0.9);
	z-index: 300000;
	display: none;
}
.kefu img{
	width: 40%;
	margin-left: 30%;
	margin-top: 30%;
}
.kefu p {
	text-align: center;
	color: #fff;
	margin-top: 1rem;
}
.feiji1{
	display: none;
}
.gwc:after{
	content: '';
	display: block;
	height: 0.4rem;
	width: 0.4rem;
	border-radius: 0.2rem;
	background-color: #d41813;
	position: absolute;
	top: 0.6rem;
	right: 0.8rem;
	z-index: 100000;
}
</style>


