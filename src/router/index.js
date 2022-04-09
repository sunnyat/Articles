import { createRouter, createWebHashHistory } from 'vue-router'
import ListArticle from '../components/ListArticle.vue'
import CreateArticle from '../components/CreateArticle.vue'
import EditArticle from '../components/EditArticle.vue'

const routes = [
  { path:'/', redirect: '/articles/index' },    // 重定向到index这个路径
  { path: '/articles/index', component: ListArticle },
  { path: '/articles/create', component: CreateArticle },
  { path: '/articles/edit/:id', component: EditArticle }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
