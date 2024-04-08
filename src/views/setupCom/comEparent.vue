<!--
 * @Descripttion: 
 * @version: 
 * @Author: wanggang
 * @Date: 2024-04-08 11:33:19
 * @LastEditors: wanggang
 * @LastEditTime: 2024-04-08 13:55:53
-->
<template>
  <div>slot作用域</div>
  <comE>
    <!-- slot 要插入子组件数据  headerProps 为绑定到 对应slot 标签绑定的属性-->
    <template #header="headerProps">comEparent slot {{ headerProps }}</template>
  </comE>
</template>
<script setup>
import comE from './component/comE.vue'
</script>
<style scoped></style>
