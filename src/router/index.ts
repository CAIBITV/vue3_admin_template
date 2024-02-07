import { createRouter, createWebHistory } from 'vue-router'
import baseRouter from './routes'

const router = createRouter({
  // 路由模式：hash | history
  history: createWebHistory(),
  routes: baseRouter,
  // 滚动行为: 具体可以查看官网, 页面位置
  scrollBehavior() {
    return { left: 0, top: 0 }
  }
})
export default router
