import {createRouter, createWebHistory} from "vue-router";

const Home = { template: '<div>Home</div>'}
const About = { template: '<div>About</div>'}

const routes = [
  { path: '/',
    component: () => import("../components/Home.vue")
  },
  { path: '/about',
    component: () => import("../components/Counter.vue")
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;