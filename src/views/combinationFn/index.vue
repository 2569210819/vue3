<!--
 * @Descripttion: 
 * @version: 
 * @Author: wanggang
 * @Date: 2024-04-08 15:02:58
 * @LastEditors: wanggang
 * @LastEditTime: 2024-04-08 15:47:13
-->
<template>
  <div>组合式函数 类似 mixnis</div>
  <div>{{ num }}</div>
</template>
<script setup>
import { useTest } from './index'
const { num } = useTest()
</script>
<style scoped></style>
