import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/App/Main'
import QQ from '@/App/QQ'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/qq',
      name: 'QQ',
      component: QQ
    }
  ]
})
