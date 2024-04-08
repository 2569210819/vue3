<!--
 * @Descripttion: 
 * @version: 
 * @Author: wanggang
 * @Date: 2024-04-03 17:55:39
 * @LastEditors: wanggang
 * @LastEditTime: 2024-04-08 14:20:10
-->
<template>
  <div>comBchild</div>
  <div>name:{{ name }}</div>
</template>
<script setup>
import { inject } from 'vue'

const name = inject('name')
</script>
<style scoped></style>
