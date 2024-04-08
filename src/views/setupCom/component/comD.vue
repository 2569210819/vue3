<template>
  <div>comD</div>
  <div v-bind="$attrs">comD-2</div>
  <comDchild> </comDchild>
</template>
<script setup>
import comDchild from './comDchild.vue'
import { useAttrs } from 'vue'

const attrs = useAttrs()
console.log(attrs, 'attrs') //
</script>
<style scoped></style>
