/*
 * @Descripttion:
 * @version:
 * @Author: wanggang
 * @Date: 2024-04-01 14:16:43
 * @LastEditors: wanggang
 * @LastEditTime: 2024-04-12 18:24:24
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'

import vue from '@vitejs/plugin-vue'
import basicSsl from '@vitejs/plugin-basic-ssl'
// 引入
// console.log(process.env.VITE_SOURCEMAP, ' process.env.VITE_SOURCEMAP')
// console.log(import.meta.env, 'import.meta.env')

import { visualizer } from 'rollup-plugin-visualizer' // 打包分析图

// 在plugins配置数组里添加
// 引入
import viteCompression from 'vite-plugin-compression'
import AutoImport from 'unplugin-auto-import/vite'
const time = new Date().getTime() // 当前时间戳，防止缓存
// https://vitejs.dev/config/
// const env = loadEnv(mode, process.cwd(), '')

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '') // 在config里，要用loadEnv 获取环境变量
  console.log(env.VITE_API, 'env.VITE_SOURCEMAP')
  return {
    plugins: [
      vue(),
      basicSsl(),
      visualizer({
        open: false, // 注意这里要设置为true，否则无效，如果存在本地服务端口，将在打包后自动展示
        gzipSize: true,
        file: 'stats.html', //分析图生成的文件名
        brotliSize: true
      }),
      //在plugins配置数组里添加gzip插件
      viteCompression({
        verbose: true, // 默认即可
        disable: false, // 开启压缩(不禁用)，默认即可
        deleteOriginFile: false, // 删除源文件
        threshold: 5120, // 压缩前最小文件大小
        algorithm: 'gzip', // 压缩算法
        ext: '.gz' // 文件类型
      }),
      AutoImport({
        imports: ['vue', 'vue-router']
      })
    ],
    // 常见配置选项
    // 共享选项 start
    base: './', // 默认的
    resolve: {
      alias: {
        // 路径别名
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    // 共享选项 end
    // 服务器选项
    server: {
      host: 'localhost', // ip地址
      port: '5173',
      https: false, //本地启动协议
      open: true, // 是否自动在浏览器中打开
      proxy: {
        // 代理
        '/api': {
          target: 'http://jsonplaceholder.typicode.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    // 构建选项
    build: {
      outDir: 'dist', // 输出目录
      assetsDir: 'assets', // 输出静态资源的目录
      sourcemap: mode === 'development' ? true : false, // 是否生成源映射文件. 测试环境 true(查问题), 生产 false
      // rollup 打包配置选项
      chunkSizeWarningLimit: 500, // 规定触发警告的 chunk 大小
      rollupOptions: {
        output: {
          // 输出打包文件，img js css 文件
          chunkFileNames: `js/[name]-[hash]${time}.js`,
          entryFileNames: `js/[name]-[hash]${time}.js`,
          assetFileNames: (assetInfo) => {
            // 设置不同类型文件的输出路径及命名规则
            if (assetInfo.type === 'asset' && /\.(jpe?g|png|gif|svg)$/i.test(assetInfo.name)) {
              return 'img/[name].[hash].[ext]' // 图像文件输出路径及命名规则
            }
            if (assetInfo.type === 'asset' && /\.(ttf|woff|woff2|eot)$/i.test(assetInfo.name)) {
              return 'fonts/[name].[hash].[ext]' // 字体文件输出路径及命名规则
            }
            return '[ext]/name1-[hash].[ext]' // 其他资源文件输出路径及命名规则
          },
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString()
            }
          }
        }
      }
    }
  }
})
