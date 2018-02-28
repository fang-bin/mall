import Vue from 'vue'
import Router from 'vue-router'
import { resolve } from 'url'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',           //首页
      name: 'index',
      meta: {
        title: '首页'
      },
      component: resolve => require(['../page/index.vue'], resolve)
    },
    {
      path: '/error',
      name: 'error',
      meta: {
        title: '错误'
      },
      component: resolve => require(['../page/error.vue'], resolve)
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
      component: resolve => require(['../page/goodDetails.vue'], resolve),
      props: true
    }
  ]
})
