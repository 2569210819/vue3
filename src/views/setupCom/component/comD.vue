<!--
 * @Descripttion: 
 * @version: 
 * @Author: wanggang
 * @Date: 2024-04-07 11:33:24
 * @LastEditors: wanggang
 * @LastEditTime: 2024-04-07 14:24:17
-->
<template>
  <div>comD</div>
  <div v-bind="$attrs">comD-2</div>
</template>
<script setup>
import { useAttrs } from 'vue'

const attrs = useAttrs()
console.log(attrs, 'attrs')
</script>
<style scoped></style>
