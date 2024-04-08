/*
 * @Descripttion:
 * @version:
 * @Author: wanggang
 * @Date: 2024-04-08 15:09:07
 * @LastEditors: wanggang
 * @LastEditTime: 2024-04-08 15:46:34
 */
// 组合式函数 约定 驼峰 useXxx格式
import { ref } from 'vue'
export function useTest() {
  const num = ref(0)
  return { num }
}
