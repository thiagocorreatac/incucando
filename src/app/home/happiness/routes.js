export default [
  {
    path: '',
    component: () => import('./Main.vue')
  },
  {
    path: '/test',
    component: () => import('./HappinessTest.vue')
  },
  {
    path: '/machine',
    component: () => import('./HappinessMachine.vue')
  }
]
