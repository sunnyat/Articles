import { createRouter, createWebHashHistory } from 'vue-router'
import ListArticle from '../components/ListArticle.vue'
import CreateArticle from '../components/CreateArticle.vue'

const routes = [
  { path:'/', redirect: '/articles/index' },    // 重定向到login这个路径
  { path: '/articles/index', component: ListArticle },
  { path: '/articles/create', component: CreateArticle }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
