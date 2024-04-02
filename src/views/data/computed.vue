<!--
 * @Descripttion: 
 * @version: 
 * @Author: wanggang
 * @Date: 2024-04-02 14:07:05
 * @LastEditors: wanggang
 * @LastEditTime: 2024-04-02 16:33:01
-->
<template>
  <div>
    <button @click="addRefNum">add ref num</button>
    <div>{{ num }}</div>
    <div>{{ computedNum }}</div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const num = ref(1)
const computedNum = computed(() => {
  return num.value * 10
})
function addRefNum() {
  num.value = num.value + 1
}
</script>

<style scoped></style>
