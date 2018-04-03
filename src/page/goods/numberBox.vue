<template>
  <div class="number-box">
    <p>数量</p>
    <div class="cal">
      <div class="cal-btn" @click="cal(false)">-</div>
      <input type="text" v-model="goodsNum" @blur="inpBlur" class="cal-inp" :disabled="!editgoods">
      <div class="cal-btn" @click="cal(true)">+</div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    min: {
      type: [String, Number],
      default: 1
    },
    max: {
      type: [String, Number],
      default: Infinity
    },
    step: {
      type: [String, Number],
      default: 1
    },
    editgoods: {
      type: Boolean,
      default: true
    },
    value: {
      type: Number,
    }
  },
  data(){
    return {
      goodsNum: this.value < this.min ? this.min : (this.value > this.max ? this.max : this.value),
      stepNum: this.step || 1,
    }
  },
  methods:{
    cal(bol){   //加减数量
      if (bol){
        (this.goodsNum + this.stepNum <= this.max) && (this.goodsNum += this.stepNum) || (this.goodsNum + this.stepNum > this.max) && (this.goodsNum = this.max);
      }else{
        (this.goodsNum - this.stepNum >= this.min) && (this.goodsNum -= this.stepNum) || (this.goodsNum - this.stepNum < this.min) && (this.goodsNum = this.min);
      }
      this.$emit('input', this.goodsNum);
    },
    inpBlur(){
      (this.goodsNum > this.max) && (this.goodsNum = this.max);
      (this.goodsNum < this.min) && (this.goodsNum = this.min);
      this.$emit('input', this.goodsNum);
    }
  },
  created(){
    if (this.min > this.max){
      console.warn('min不能大于max');
    }
    
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/mixin.scss';
.number-box{
  margin-top: pr(30px);
  padding: 0 pr(24px);
  @include fs;
  .cal{
    @include fs(flex-start);
    width: pr(260px);
    height: pr(55px);
    line-height: pr(55px);
    border: 1px solid #999;
    >div{
      text-align: center;
      width: pr(80px);
      font-size: 14px;
    }
    .cal-inp{
      width: pr(100px);
      text-align: center;
      border: {
        left: 1px solid #999;
        right: 1px solid #999;
      }
    }
  }
}
input:disabled{
  background-color: #fff;
}


</style>

