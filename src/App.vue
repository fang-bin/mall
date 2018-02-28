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
@import "./common/css/reset.css";
@import "./common/css/loading.scss";
.child-view { 
  position: absolute;
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  transition: all .5s cubic-bezier(.55,0,.1,1); 
} 
.slide-left-enter, .slide-right-leave-active { 
  opacity: 0; 
  transform: translate(100%, 0); 
} 
.slide-left-leave-active, .slide-right-enter { 
  opacity: 0; 
  transform: translate(-100%, 0);
}
</style>
