import Vue from 'vue'
import Router from 'vue-router'
import Home from "../Home.vue"
const Index = () => import("../pages/Index.vue")
const Table = () => import("../pages/Table.vue")

Vue.use(Router)

const routes = [{
  path: "/",
  component: Home,
  children: [
    {
      path: 'home',
      name: "home",
      component: Index
    },
    {
      path: "table",
      name: "table",
      component: Table
    }
  ]
}]

export default new Router({
  routes: routes,
  mode: "hash",
  base: __dirname
})


