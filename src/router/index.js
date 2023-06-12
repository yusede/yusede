import { createRouter, createWebHashHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    name: 'firstComp',
    component: () => import('../views/firstComp.vue')
  },
  {
    path: '/secondeComp',
    name: 'secondeComp',

    component: () => import('../views/secondComp.vue')
  },
  {
    path: '/thirdComp',
    name: 'thirdComp',
    component: () => import('../views/thirdComp.vue')
  },
  {
    path: '/fourthComp',
    name: 'fourthComp',

    component: () => import('../views/fourthComp.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
