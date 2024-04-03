<template>
  <div>
    <button @click="addRefNum">comA add com num</button>
    <div>comA:{{ num }}</div>
  </div>
</template>
<script setup>
import { ref, onDeactivated, onActivated } from 'vue'
const num = ref(0)
function addRefNum() {
  num.value = num.value + 1
}
onDeactivated(() => {
  console.log('onDeactivated A')
})
onActivated(() => {
  console.log('onActivated A')
})
</script>
<style scoped></style>
