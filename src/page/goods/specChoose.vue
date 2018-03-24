<template>
  <ul class="spec-content">
    <li v-for="(item, index) in specData" :key="index">
        <p class="name">{{item.name}}</p>
        <ul>
            <li v-for="(e, i) in item.pro" :key="i" @click="chooseSpec(index, i, e.proId)" :class="i == radioArr[index] ? 'act' : ''">
              {{e.name}}
            </li>
        </ul>
    </li>
  </ul>
</template>

<script>
export default {
  props:['specData'],
  data(){
    return{
      radioArr: Array(this.specData.length),
    }
  },
  methods:{
    chooseSpec(index, i, id){    // 选择规格的方法 id == 规格id
      this.radioArr.splice(index, 1, i);
    }
  },
  created(){
    console.log(this.radioArr);
  }
};
</script>

<style lang="scss" scoped>
@import '../../styles/mixin.scss';
.spec-content {
  padding: 0 pr(24px);
  box-sizing: border-box;
  width: 100%;
  font-size: 12px;
  color: #555555;
  > li {
    margin-top: pr(30px);
    line-height: pr(55px);
    display: flex;
    flex-wrap: wrap;
    p {
      height: pr(55px);
      width: pr(80px);
      text-align: left;
    }
    > ul {
      display: flex;
      flex-wrap: wrap;
      li {
        box-sizing: border-box;
        height: pr(55px);
        line-height: pr(55px);
        padding: 0 pr(40px);
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-right: pr(30px);
      }
      li.act{
        background-color: #e3393c;
        color: #fff;
        border: 1px solid #e3393c;
      }
    }
  }
}
</style>


