import happinessRoute from './happiness/routes'
export default [
  {
    path: '/',
    component: () => import('./HomeStructure.vue'),
    children: happinessRoute
  },
  {
    path: '*',
    component: () => import('./Error404.vue')
  }
]
