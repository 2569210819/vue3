/*
 * @Descripttion:
 * @version:
 * @Author: wanggang
 * @Date: 2024-04-01 14:16:43
 * @LastEditors: wanggang
 * @LastEditTime: 2024-04-02 14:50:24
 */
// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
