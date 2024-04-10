import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0) // state
  const name = ref('小明')
  const list = ref([{ id: '001' }])
  const doubleCount = computed(() => count.value * 2) // getter
  function increment() {
    // active
    count.value++
  }
  function changeName() {
    name.value = 'active name'
  }
  return { count, doubleCount, increment, name, list, changeName }
})
