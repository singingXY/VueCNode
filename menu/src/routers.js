import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'
const Article = () => import('./views/article.vue')
const User = () => import('./views/user.vue')
import Index from './views/list.vue';

//安装插件
Vue.use(VueRouter);//挂载属性

const routes = [{
    path: '/',
    name: 'index',
    component: Index
  },{
    path: '/topic/:id',
    name: 'article',
    component: Article
  },{
    path: '/user/:loginname',
    name: 'user',
    component: User
  },{
    path: '*',
    component:Index
  }];

VueRouter.prototype.$goBack = function () { 
  　　this.isBack = true
  　　window.history.go(-1)
  }
  
  // 3. 创建 router 实例，然后传 `routes` 配置
  export default new VueRouter({
    mode: 'history',
    routes // (缩写) 相当于 routes: routes
  })