<template>
  <div>nav</div>
  <button @click="goIndex">go index</button>
  <button @click="go">go -1</button>
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
console.log(route, 'route')
console.log(route.query, 'route.query')
function goIndex() {
  router.push({
    path: '/routerIndex'
  })
}
function go() {
  router.go(-1)
}
</script>
<style scoped></style>
