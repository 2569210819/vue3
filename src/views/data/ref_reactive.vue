<!--
 * @Descripttion: 
 * @version: 
 * @Author: wanggang
 * @Date: 2024-04-02 14:07:05
 * @LastEditors: wanggang
 * @LastEditTime: 2024-04-02 16:03:26
-->
<!--
 * @Descripttion: 
 * @version: 
 * @Author: wanggang
 * @Date: 2024-04-02 14:07:05
 * @LastEditors: wanggang
 * @LastEditTime: 2024-04-02 15:45:08
-->
<template>
  <div>
    <button @click="addRefNum">add num</button>
    <div>{{ num }}</div>
    <button @click="addRefObj">add ref obj age</button>
    <div>{{ refObj.age }}</div>
    <button @click="addAge">add age</button>
    <div>{{ obj.age }}</div>
    <button @click="getRefDom">get ref dom</button>
    <div ref="div">ref dom</div>
    <button @click="getRefcom">get ref component</button>
    <test ref="test"></test>
  </div>
</template>

<script setup>
import test from './component/test.vue'
import { ref, reactive } from 'vue'

// ref reactive computed
// ref 定义基本数据类型和复杂数据类型，获取组件或者dom,
// reactive 定义复杂数据类型 [对象or数组]

// ref 的值需要 xx.value 修改
const num = ref(0)
const div = ref(null) // 放在最外层
const refTest = ref(null)
const refObj = ref({
  age: 19,
  name: 'name'
})
const obj = reactive({
  age: 18,
  name: 'name'
})

function addRefNum() {
  num.value = 3
  console.log(num, 'ref num')
}
function addRefObj() {
  refObj.value.age = 20
  console.log(refObj, 'ref refObj')
}
function addAge() {
  obj.age = 4
  console.log(obj, 'reactive obj')
}
function getRefDom() {
  console.log(div.value, 'ref dom')
}
function getRefcom() {
  console.log(refTest.value, 'ref test') // vue3关闭了直接获取组件的通道，需要子组件暴露出来才能获取到
}
</script>

<style scoped></style>
