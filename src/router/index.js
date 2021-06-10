import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../components/Layout.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
   /* 默认打开主页 */
   {
    path: '/',
    redirect: '/home'
  },
   /* 首页路由 */
   {
    path: '/home',
    component: Layout,
    children: [
      {
        path: '/',
        component: Home,
        meta: {
          title: '首页',
          keepAlive: true
        }
      }
    ]
  },
  {
    path: '/about',
    component: Layout,
    children: [
      {
        path: '/',
        component: About,
        meta: {
          title: '测试',
          keepAlive: true
        }
      }
    ]
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
