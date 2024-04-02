<template>
  <div>
    <button @click="addRefNum">add ref num</button>
    {{ num }}
  </div>
</template>

<script setup>
import { ref, watch, watchEffect, watchPostEffect, watchSyncEffect } from 'vue'
// watch watchEffect watchPostEffect watchSyncEffect

// deep 深度监听
// immediate  立即执行
// once 执行一次
// flush 回调触发时机  post dom更新后，vue任何更新之前触发
const num = ref(1)
// watch 和 vue2 基本无区别
watch(
  num,
  (val) => {
    console.log(val, 'val')
  },
  {
    // immediate: true,
    // flush: 'sync'
    // deep:true,
  }
)
//立即执行， 并监听回调中的用到的响应数据
watchEffect(() => {
  let res = num.value + 1
  console.log(res, 'res')
})
watchPostEffect(() => {
  let res = num.value + 2
  console.log(res, 'dom 更新后res')
})
watchSyncEffect(() => {
  let res = num.value + 3
  console.log(res, 'vue 更新之前')
})
function addRefNum() {
  num.value = num.value + 1
}
</script>

<style scoped></style>
