<template>
<div class="box">
    <div class="spec-box">
        <div class="spec-header">
            <div class="img-box">
                <img src="">
            </div>
            <div class="title-box">
                <div>
                    <h2>双层精品哈哈哈哈拉拉阿拉哟爽肤水</h2>
                    <p>限购1件</p>
                    <h5>¥2999.00 <span v-red>每满50抵扣25</span></h5>
                </div>
            </div>
            <div class="close-icon" @click="hidePop">
                <img src="../../img/close.png">
            </div>
        </div>
        <spec-choose :specData="specData"></spec-choose>
        <ul class="spec-footer">
            <li>加入购物车</li>
            <li>立即购买</li>
        </ul>
    </div>
</div>
</template>

<script>
import specChoose from './specChoose'
export default {
  data() {
    return {};
  },
  methods: {
    hidePop() {
      this.$emit("hidePop");
    }
  },
  components: {
    specChoose
  },
  props:['specData']
};
</script>

<style lang="scss" scoped>
@import '../../styles/mixin.scss';
.box {
  background-color: #fff;
  width: 100%;
  .spec-box {
    width: 100%;
    position: relative;
    background-color: #fff;
    .spec-header {
      @include fs;
      padding: 0 pr(24px);
      height: pr(180px);
      border-bottom: 1px solid #eee;
      .img-box {
        width: pr(200px);
        height: pr(200px);
        border-radius: pr(10px);
        box-sizing: border-box;
        border: 1px solid #e5e5e5;
        margin-top: pr(-44px);
        align-items: flex-start;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      .title-box {
        height: 100%;
        display: flex;
        width: pr(438px);
        align-items: center;
        > div {
          width: 100%;
          h2 {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-size: 16px;
            line-height: 20px;
            color: #353535;
          }
          p {
            color: #959595;
            font-size: 10px;
            line-height: 15px;
          }
          h5 {
            color: #f82d26;
            font-size: 16px;
            line-height: 20px;
            margin-top: pr(10px);
          }
        }
      }
      .close-icon {
        width: pr(30px);
        height: pr(30px);
        margin-top: pr(20px);
        img {
          width: 100%;
        }
      }
    }

    .spec-footer {
      margin-top: pr(30px);
      height: pr(100px);
      line-height: pr(100px);
      text-align: center;
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      color: #fff;
      li {
        width: 50%;
        background-color: #ff9600;
      }
      & li:last-child {
        background-color: #e3393c;
      }
    }
  }
}
</style>


