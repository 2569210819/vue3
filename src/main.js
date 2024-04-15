/*
 * @Descripttion:
 * @version:
 * @Author: wanggang
 * @Date: 2024-04-01 14:16:43
 * @LastEditors: wanggang
 * @LastEditTime: 2024-04-15 14:38:59
 */
// import './assets/main.css'
console.log(import.meta.env, 'import.meta.env')

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import * as ElementPlusIconsVue from '@element-plus/icons-vue'  // 采用按需引入
import directivesPlugin from './views/directive/directive.js'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(directivesPlugin)
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//   app.component(key, component)
// }
app.mount('#app')
