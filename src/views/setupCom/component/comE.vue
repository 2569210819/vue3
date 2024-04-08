<!--
 * @Descripttion: 
 * @version: 
 * @Author: wanggang
 * @Date: 2024-04-08 11:46:24
 * @LastEditors: wanggang
 * @LastEditTime: 2024-04-08 13:51:28
-->
<template>
  <div>comE</div>
  <slot name="header" :obj="obj"> </slot>
</template>
<script setup>
import { reactive, ref } from 'vue'

const obj = reactive({
  name: 'wg',
  age: 19
})
</script>
<style scoped></style>
