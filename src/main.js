/*
 * @Descripttion:
 * @version:
 * @Author: wanggang
 * @Date: 2024-04-01 14:16:43
 * @LastEditors: wanggang
 * @LastEditTime: 2024-04-12 17:17:48
 */
// import './assets/main.css'
console.log(import.meta.env, 'import.meta.env')

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import directivesPlugin from './views/directive/directive.js'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(directivesPlugin)
app.mount('#app')
