<!--
 * @Descripttion: 
 * @version: 
 * @Author: wanggang
 * @Date: 2024-04-02 14:29:45
 * @LastEditors: wanggang
 * @LastEditTime: 2024-04-03 16:16:03
-->
<template>
  <div>
    <button @click="addRefNum">add ref num</button>
    <div>{{ num }}</div>
    <button @click="addCount">add ref count</button>
    <div>{{ count }}</div>
    <button @click="addObjNum">add obj ref num</button>
    <div>{{ obj.num }}</div>
    <button @click="addObjList">add obj reactive list</button>
    <button @click="changeObjList">change obj reactive list.id</button>
    <div>
      <div v-for="item in obj.list" :key="item.id">
        {{ item.id }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, watch, watchEffect, watchPostEffect, watchSyncEffect } from 'vue'
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

// 监听基本变量 和 复杂变量
const count = ref(0)
const obj = reactive({
  num: 0,
  list: [
    {
      id: 1
    }
  ]
})
// 监听基本类型
watch(count, (val) => {
  console.log(val, 'count')
})
// 监听对象中的基本类型
watch(
  () => obj.num,
  (val) => {
    console.log(val, 'obj.num')
  }
)
// 监听对象中的复杂类型
// 直接监听obj,会自动深度监听
watch(obj, (val) => {
  console.log(val, 'obj')
})
// 对象里面的list对象不会自动深度监听,监听list对象里面的值要加deep,不加deep,只有list对象整体替换掉才能监听到
watch(
  () => obj.list,
  (val) => {
    console.log(val, 'obj.list')
  },
  { deep: true }
)
function addCount() {
  count.value = count.value + 1
}
function addObjNum() {
  obj.num = obj.num + 1
}
function addObjList() {
  obj.list = [{ id: 1 }, { id: 3 }]
}
function changeObjList() {
  obj.list[0].id = obj.list[0].id + 1
}
</script>

<style scoped></style>
