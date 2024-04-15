<!--
 * @Descripttion: 
 * @version: 
 * @Author: wanggang
 * @Date: 2024-04-12 18:25:40
 * @LastEditors: wanggang
 * @LastEditTime: 2024-04-15 14:59:49
-->
<template>
  <div>自动引入 vue vue-router api,element ui plus</div>
  <div>obj.num:{{ obj.num }}</div>
  <button @click="add">add num</button>
  <div>age:{{ age }}</div>

  <button @click="addAge">add age</button>
  <div>element ui plus</div>
  <div>
    <el-button type="primary">Primary</el-button>
    <el-icon>
      <i-ep-edit />
    </el-icon>
    <el-icon>
      <i-ep-lightning />
    </el-icon>
    <!-- <Loading /> -->
    <el-icon><i-ep-loading /></el-icon>
  </div>
  <div class="spanStyle">
    <span>less color</span>
    <p class="spanStyle-pStyle">fffff</p>
  </div>
</template>
<script setup>
// import { reactive } from 'vue';
let obj = reactive({
  num: 1
})
const age = ref(100)
function add() {
  obj.num++
  console.log(obj, 'num.value')
}
function addAge() {
  age.value = age.value + 1
}
</script>
<style scoped lang="less">
.spanStyle {
  span {
    color: red;
  }
  &-pStyle {
    color: blue;
  }
}
</style>
