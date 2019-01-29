import Vue from 'vue'
import Router from 'vue-router'
import App from "../App.vue"
const Home = () => import("../pages/Home.vue")
const Table = () => import("../pages/Table.vue")
const Card = () => import("../pages/Card.vue")
const Form = () => import("../pages/Form.vue")
const Button = () => import("../pages/Button.vue")

Vue.use(Router)

const routes = [
  {
    path: "/table",
    name: "table",
    component: Table
  },{
    path: "/card",
    name: "card",
    component: Card
  },{
    path: "/form",
    name: "form",
    component: Form
  },{
    path: "/button",
    name: "button",
    component: Button
  },{
    path: '/',
    name: "home",
    component: Home
  }]

export default new Router({
  routes: routes,
  mode: "hash"
})


