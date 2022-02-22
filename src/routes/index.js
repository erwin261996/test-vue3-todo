import {createRouter, createWebHistory} from "vue-router";

const routes = [
  {
    path: '/',
    component: () => import("../components/Home.vue")
  }, {
    path: '/about',
    component: () => import("../components/Counter.vue")
  }, {
    path: '/todo',
    component: () => import("../components/Todo/index.vue")
  }, {
    path: '/reactivity',
    component: () => import("../components/reactivity.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;