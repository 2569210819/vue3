<!--
 * @Descripttion: 
 * @version: 
 * @Author: wanggang
 * @Date: 2024-04-03 11:24:05
 * @LastEditors: wanggang
 * @LastEditTime: 2024-04-03 17:51:15
-->
<template>
  <div>父子组件</div>
  <div>com parent start</div>
  <div>
    <button @click="addComAage">add comA age,change porps age</button>
    <div>
      <button @click="getRefComA">get ref comA 并 change comA num</button>
    </div>
  </div>
  <div>com parent end</div>

  <comA :age="age" :list="list" @emitAge="emitAge" ref="refComA"></comA>
</template>

<script setup>
import { nextTick, reactive, ref } from 'vue'
import comA from './component/comA.vue'
let age = ref(9)
const refComA = ref(null)
let list = reactive([{ id: 1 }, { id: 2 }])
function addComAage() {
  age.value = age.value + 1
}
function emitAge(val) {
  console.log(val, 'index change')
  age.value = val
}
function getRefComA() {
  nextTick(() => {
    console.log(refComA, 'refComA')
    refComA.value.changeNum()
  })
}
</script>

<style></style>
