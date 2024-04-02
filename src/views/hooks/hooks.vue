<!--
 * @Descripttion: 
 * @version: 
 * @Author: wanggang
 * @Date: 2024-04-02 14:31:48
 * @LastEditors: wanggang
 * @LastEditTime: 2024-04-02 18:23:49
-->
<template>
  <div>
    <button @click="addRefNum">add ref num</button>
    <div>{{ num }}</div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUpdated } from 'vue'
const num = ref(0)
console.log('类似 create')
onMounted(() => {
  console.log('onMounted')
})
onUpdated(() => {
  console.log('onUpdated')
})
console.log('end')
function addRefNum() {
  num.value = num.value + 1
}
</script>
<style scoped></style>
