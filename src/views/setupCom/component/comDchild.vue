<!--
 * @Descripttion: 
 * @version: 
 * @Author: wanggang
 * @Date: 2024-04-08 10:09:38
 * @LastEditors: wanggang
 * @LastEditTime: 2024-04-08 11:30:15
-->
<template>
  <div>comDchild</div>
</template>
<script setup>
import { useAttrs } from 'vue'

const attrs = useAttrs()
console.log(attrs, 'comDchild attrs')
</script>
<style scoped></style>
