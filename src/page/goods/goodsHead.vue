<template>
  <div class="goods-head">
    <div class="banner-box">
      <swiper :options="bannerSwiper" ref="bannerSwiper">
          <swiper-slide v-for="(item,index) in data.bannerList" :key="index">
              <img :src="item.img">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="tit-box">
      <h1>{{data.goodsName}}</h1>
      <p>{{data.goodsTip}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data(){
    return {
      bannerSwiper: {   //swiper的设置
        notNextTick: true,
        autoplay: true,
        // effect:"coverflow",
        // grabCursor : true,
        loop: true,
        setWrapperSize: true,
        pagination: {
          el: ".swiper-pagination"
        },
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true
      },
    }
  },
  methods:{

  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/mixin.scss';
.goods-head{
  overflow: hidden;
  .tit-box {
    background-color: #fff;
    padding: 0 pr(24px);
    text-align: justify;
    h1 {
      font-size: 15px;
      line-height: 18px;
      padding-top: pr(24px);
    }
    p {
      font-size: 12px;
      color: #dd2727;
      line-height: 18px;
      margin-top: pr(10px);
      padding-bottom: pr(12px);
    }
  }
}
</style>


