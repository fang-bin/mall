import Vue from 'vue'
import Router from 'vue-router'
import { resolve } from 'url'


const home = r => require.ensure([], () => r(require('../page/home/home.vue')), 'home');
const error = r => require.ensure([], () => r(require('../page/error/error.vue')), 'error');
const goods = r => require.ensure([], () => r(require('../page/goods/goods.vue')), 'goods');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',           //首页
      name: 'home',
      meta: {
        title: '首页'
      },
      component: home
    },
    {
      path: '/error',
      name: 'error',
      meta: {
        title: '错误'
      },
      component: error
    },
    {
      path: '*',
      redirect: '/error'
    },
    {
      path: '/goodDetail/:id',      //商品详情页
      name: 'goodDetail',
      meta: {
        title: '商品详情页'
      },
      component: goods,
      props: true
    }
  ]
})
