// Composables
import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue';

const routeInfos = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  },
  {
    path: "/:catchAll(.*)",
    component: () => import("../views/NotFound.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routeInfos,
});

export default router;
