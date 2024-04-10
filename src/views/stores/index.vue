<!--
 * @Descripttion: 
 * @version: 
 * @Author: wanggang
 * @Date: 2024-04-10 16:19:43
 * @LastEditors: wanggang
 * @LastEditTime: 2024-04-10 18:10:04
-->
<template>
  <div>index</div>
  <button @click="getStore">get store</button>
  <!-- index 修改，测试 comA 是否同步到  -->
  <button @click="setStore">set store op state count</button>
  <button @click="setStoreFn">set store op state fn increment(active)</button>
  <button @click="gocomA">go store comA</button>
</template>
<script setup>
import { useCounterStore } from '@/stores/counter.js'
import { useRouter } from 'vue-router'
const store = useCounterStore()
const router = useRouter()
function getStore() {
  console.log(store.count, 'store.count')
}
function setStore() {
  store.count++
}
function setStoreFn() {
  store.increment()
}
function gocomA() {
  router.push({
    path: '/storesComA'
  })
}
</script>
<style scoped></style>
