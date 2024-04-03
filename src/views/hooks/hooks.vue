<!--
 * @Descripttion: 
 * @version: 
 * @Author: wanggang
 * @Date: 2024-04-02 14:31:48
 * @LastEditors: wanggang
 * @LastEditTime: 2024-04-03 11:06:11
-->
<template>
  <div>
    <button @click="addRefNum">add ref num</button>
    <div>{{ num }}</div>
    <button @click="changeView('A')">change view code</button>
    <button @click="changeView('B')">change view code</button>
    <KeepAlive>
      <component :is="view"></component>
    </KeepAlive>
  </div>
</template>
<script setup>
import comA from './component/comA.vue'
import comB from './component/comB.vue'
import { ref, onMounted, onUpdated, onBeforeMount, onBeforeUpdate, nextTick, shallowRef } from 'vue'
const num = ref(0)
let view = shallowRef(comA)
console.log('类似 create')
onBeforeMount(() => {
  console.log('onBeforeMount')
})
onMounted(() => {
  console.log('onMounted')
})
onBeforeUpdate(() => {
  console.log('onBeforeUpdate')
})
onUpdated(() => {
  console.log('onUpdated')
})
console.log('end')
function addRefNum() {
  num.value = num.value + 1
  nextTick(() => {
    console.log('nextTick')
  })
}
function changeView(val) {
  view.value = val === 'A' ? comA : comB
}
</script>
<style scoped></style>
