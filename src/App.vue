<template>
  <div id="app">
    <loading v-model="isLoading"></loading>
    <transition :name="direction === 'forward' ? 'slide-left' : 'slide-right'">
      <router-view class="child-view"></router-view>
    </transition>
    <ball></ball>
  </div>
</template>

<script>
import { Loading } from 'vux'
import { mapState } from 'vuex'
import Ball from './components/ball'
export default {
  name: 'App',
  data(){
    return {
    }
  },
  computed: {
    ...mapState({
      direction: state => state.main.direction,
      isLoading: state => state.main.isLoading,
    })
  },
  components: {
    Loading,
    Ball
  },
  mounted(){
    console.log(this.direction);
  }

}
</script>

<style lang="scss">
// @import "./common/css/loading.scss";
@import "./styles/reset.scss";
</style>
