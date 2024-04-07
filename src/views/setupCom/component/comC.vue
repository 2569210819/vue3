<template>
  <div>自定义v-model child</div>
  <button @click="undateModel">child updateModel</button>
  <div>child:model{{ model }}</div>
  <button @click="updateTitle">update title</button>
  <div>child:title{{ title }}</div>
</template>
<script setup>
const model = defineModel() // 默认属性 modelValue  update:modelValue
const title = defineModel('title', { default: 0 }) // 自定义属性 title, 第二个参数是 prop 选项
function undateModel() {
  model.value = model.value + 1
}
function updateTitle() {
  title.value = title.value + 1
}
</script>
<style scoped></style>
