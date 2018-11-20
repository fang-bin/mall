<template>
  <ul>
    <router-link tag="li" v-for="(item, index) in listData" :key="index" to="item.link">
      <div><span :class="['logo', item.logo]"></span>{{ item.name }}</div>
      <span class="right-icon"></span>
    </router-link>
  </ul>
</template>
<script>
export default {
  data(){
    return{
      listData: [
        {
          "logo": "logo1",
          "name": "我的购物卡",
          "link": "www.baidu.com"
        },
        {
          "logo": "logo2",
          "name": "我的订单",
          "link": "www.baidu.com"
        },
        {
          "logo": "logo3",
          "name": "收货地址",
          "link": "www.baidu.com"
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../styles/mixin.scss';
  li{
    height: pr(120px);
    line-height: pr(120px);
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 pr(30px);
    background-color: #fff;
    margin-bottom: 1px;
    align-content: center;
    align-items: center;
    font-size: pr(30px);
    .logo{
      width: pr(60px);
      height: pr(60px);
      display: inline-block;
      vertical-align: middle;
      margin-right: 30px;
    }
    .logo1{
      @include bis('../../img/card-logo.png');
    }
    .logo2{
      @include bis('../../img/order-logo.png');
    }
    .logo3{
      @include bis('../../img/address-logo.png');
    }
    .right-icon{
      width: pr(11px);
      height: pr(20px);
      display: inline-block;
      @include bis('../../img/m-right.png');
    }
  }
</style>

