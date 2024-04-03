<!--
 * @Descripttion: 
 * @version: 
 * @Author: wanggang
 * @Date: 2024-04-03 09:56:20
 * @LastEditors: wanggang
 * @LastEditTime: 2024-04-03 11:10:28
-->
<template>
  <div>
    <button @click="addRefNum">comB add com num</button>
    <div>comB:{{ num }}</div>
  </div>
</template>
<script setup>
import { onActivated, onDeactivated, ref } from 'vue'
const num = ref(0)
function addRefNum() {
  num.value = num.value + 1
}
onDeactivated(() => {
  console.log('onDeactivated B')
})
onActivated(() => {
  console.log('onActivated B')
})
</script>
<style scoped></style>
