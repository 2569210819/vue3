<!--
 * @Descripttion: 
 * @version: 
 * @Author: wanggang
 * @Date: 2024-04-07 10:11:50
 * @LastEditors: wanggang
 * @LastEditTime: 2024-04-07 11:00:48
-->
<template>
  <div>自定义v-model</div>
  <div>parent:count {{ count }}</div>
  <div>parent:title {{ title }}</div>
  <comC v-model:title="title" v-model="count"></comC>
</template>
<script setup>
import { ref } from 'vue'
import comC from './component/comC.vue'
const count = ref(0)
const title = ref(0)
</script>
<style scoped></style>
