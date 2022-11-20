import { createRouter, createWebHashHistory } from 'vue-router'
import View1 from '../views/View1.vue'
import View2 from '../views/View2.vue'

const routes = [
  {
    path: '/view1',
    name: 'view1',
    component: View1
  },
  {
    path: '/view2',
    name: 'view2',
    component: View2
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
