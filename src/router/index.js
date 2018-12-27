import Vue from 'vue'
import Router from 'vue-router'
import Leftbar from '@/components/Leftbar'
import Home from '@/pages/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
          leftbar: Leftbar,
          main: Home
      }
    }
  ]
})
