import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import User from '@/components/User'
import UserBad from '@/components/UserBad'
import UserGood from '@/components/UserGood'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      children: [
        { path: '/user/bad', component: UserBad},
        { path: '/user/good', component: UserGood},
      ]
    }
  ]
})
