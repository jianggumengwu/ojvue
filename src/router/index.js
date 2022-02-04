import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home";
import HomePage from "@/views/HomePage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    component: HomePage
  },
  {
    path: '/home',
    component: Home
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
