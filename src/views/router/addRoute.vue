<template>
  <div>动态添加的 路由</div>
  <button @click="go">返回</button>
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
console.log(route, 'route')
function go() {
  router.go(-1)
}
</script>
<style scoped></style>
