<!--
 * @Descripttion: 
 * @version: 
 * @Author: wanggang
 * @Date: 2024-04-10 16:21:42
 * @LastEditors: wanggang
 * @LastEditTime: 2024-04-10 18:28:21
-->
<template>
  <div>store comA</div>
  <button @click="getStore">get store</button>

  <button @click="setStoreName">set store name</button>
  <button @click="setStoreBatchA">set batchA store</button>
  <button @click="setStoreBatchB">set batchB store</button>
  <button @click="setStoreActiveChangeName">set store active changeName function</button>
</template>
<script setup>
// 组合式api 没有map映射方法
import { useCounterStore } from '@/stores/counter.js'
const store = useCounterStore()
function getStore() {
  //   console.log(store, 'store')
  console.log(store.count, 'store.count')
  console.log(store.name, 'store.name')
  console.log(store.list, 'store.list')
}
// 直接修改单个state
function setStoreName() {
  store.name = '直接修改'
}
// 批量修改 state
// 方法一,obj要整体替换，性能底
function setStoreBatchA() {
  store.$patch({
    count: 100,
    name: '小红',
    list: [{ age: '10' }]
  })
}
// 可以操作obj的某一项
function setStoreBatchB() {
  store.$patch((state) => {
    state.name = '小王'
    state.list.push({ id: 'key' })
  })
}
// 通过函数修改 active
function setStoreActiveChangeName() {
  store.changeName()
}
</script>
<style scoped></style>
