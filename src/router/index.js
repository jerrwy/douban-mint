import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Media from '@/components/Media'
import Team from '@/components/Team'
import Me from '@/components/Me'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/media',
      name: 'Media',
      component: Media
    },
    {
      path: '/team',
      name: 'Team',
      component: Team
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    }
  ]
})
