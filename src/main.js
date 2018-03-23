// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import ZSAPP from './common/js/custom';
import ZSAPP from './js/custom'
import router from './router'
import axios from './http/http'
import store from './store'
import { Toast, MessageBox, Popup, Lazyload } from 'mint-ui';
import * as types from './store/mutation-types'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import * as utils from './config/utils'
import './config/rem'



import fastclick from 'fastclick'    //添加Fastclick移除移动端点击延迟
fastclick.attach(document.body);


Vue.component(Popup.name, Popup);
Vue.use(Lazyload);
Vue.use(VueAwesomeSwiper)



Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

const toast = function (txt){
  Toast({
    message: txt,
    position: 'bottom',
    duration: 2000
  });
}

utils.removeSession('count');
let historyCount = utils.getSession('count') *1 || 0;
utils.setSession('/', 0);
router.beforeEach((to, from, next) => {
  //播放加载动画
  store.commit(types.UPDATE_LOADING, {isLoading : true});
  if (to.meta.title){   //根据路由组件设置标题名
    document.title = to.meta.title;
  }
  const toIndex = utils.getSession(to.path);
  const fromIndex = utils.getSession(from.path);
  if (toIndex){      //根据记录的路由先后顺序，调整页面切换的动画
    if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')){
      store.commit(types.UPDATE_DIRECTION, {direction : 'forward'});
    }else{
      store.commit(types.UPDATE_DIRECTION, {direction : 'reverse'});
    }
  }else{
    ++historyCount;
    utils.setSession('count', historyCount);
    to.path !== '/' && utils.setSession(to.path, historyCount);
    store.commit(types.UPDATE_DIRECTION, {direction : 'forward'});
  }
  next()
});

router.afterEach((to, from) => {
  // setTimeout(() => {
    store.commit(types.UPDATE_LOADING, {isLoading : false});
  // }, 200);
});

/* 自定义指令  */

// 标签指令
Vue.directive('red',{   //红色标签
  bind: function (el,binding,vnode){
    el.style.backgroundColor = "#f82d26";
    el.style.color = "#fff";
    el.style.display = "inline-block";
    el.style.height = "15px";
    el.style.lineHeight = "15px";
    el.style.padding = "0 3px";
    el.style.borderRadius = "3px";
    el.style.fontSize = "10px";
    el.style.marginLeft = "3px";
  }
})


Vue.prototype.$message = MessageBox;
Vue.prototype.$toast = toast;


// Vue.mixin({
//   created(){
//     console.log('a');
//   }
// });


new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
