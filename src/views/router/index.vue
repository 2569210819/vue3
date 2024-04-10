<template>
  <div>router 几乎没有区别</div>
  <button @click="goNav">to nav</button>
  <button @click="goAbout">to about</button>
  <button @click="addRouteFn">add route</button>
  <button @click="goAddRoute">go add route com</button>
  <button @click="goRouteLazy">route lazy</button>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
import routerAddRoute from '@/views/router/addRoute.vue'

function goNav() {
  router.push({
    path: '/routerNav',
    query: {
      name: 'wg',
      age: 19
    }
  })
}
function goAbout() {
  router.push({
    path: '/routerAbout'
  })
}
function addRouteFn() {
  router.addRoute({
    path: '/routerAddRoute',
    component: routerAddRoute
  })
}
function goAddRoute() {
  router.push({
    path: '/routerAddRoute',
    query: {
      key: 'id'
    }
  })
}
function goRouteLazy() {
  router.push({
    path: '/routerLazyRoute'
  })
}
</script>
<style scoped></style>
