import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import installElementPlus from './plugins/element'
// 导入全局样式表
import './assets/css/global.css'
import './assets/fonts/iconfont.css'
import axios from 'axios'

// axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'
axios.defaults.baseURL = 'http://localhost:3001/api'


const app = createApp(App)

app.config.globalProperties.$axios = axios

installElementPlus(app)
app.use(router).mount('#app')
