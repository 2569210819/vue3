<!--
 * @Descripttion: 
 * @version: 
 * @Author: wanggang
 * @Date: 2024-04-03 11:21:59
 * @LastEditors: wanggang
 * @LastEditTime: 2024-04-03 17:47:55
-->
<template>
  <div style="margin-top: 50px">comA子组件</div>
  <button @click="changeNum">comA change Num</button>
  <div>num:{{ num }}</div>
  <div>comA age:{{ props.age }}</div>
  <div>
    <div v-for="item in props.list" :key="item.id">
      {{ item.id }}
    </div>
  </div>
  <button @click="emitAge">emit comA age</button>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  age: {
    type: Number,
    default: 0
  },
  list: {
    type: Array,
    default: () => {
      return []
    }
  }
})
const emits = defineEmits(['emitAge'])

watch(
  () => props.age,
  (val) => {
    console.log(val, 'watch age')
  }
)
watch(
  () => props.list,
  (val) => {
    console.log(val, 'props.list')
  },
  { immediate: true }
)

function emitAge() {
  emits('emitAge', new Date().getTime())
}

const num = ref(0)
function changeNum() {
  num.value = num.value + 1
}
defineExpose({ num, changeNum })
</script>

<style></style>
