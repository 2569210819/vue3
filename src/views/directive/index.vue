<template>
  <div>全局指令 局部指令</div>
  <div>局部指令</div>
  <input type="text" v-focus placeholder="自动聚焦" />
  <div>全局指令</div>
  <div v-color>color</div>
</template>
<script setup>
// 生命钩子 created  beforeMount mounted beforeUpdate updated beforeUnmount unmounted
const vFocus = {
  mounted(el) {
    el.focus()
  }
}
</script>
<style scoped></style>
