<!--
 * @Descripttion: 
 * @version: 
 * @Author: wanggang
 * @Date: 2024-04-03 17:53:58
 * @LastEditors: wanggang
 * @LastEditTime: 2024-04-08 14:16:09
-->
<template>
  <div>跨代组件</div>
  <div>comBparent</div>
  <comB></comB>
</template>
<script setup>
import { provide } from 'vue'
import comB from './component/comB.vue'
provide('name', '小明')
</script>
<style scoped></style>
