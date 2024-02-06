import { defineConfig, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// SVG图标插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// Mock插件
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig(({ command }: ConfigEnv) => {
  return {
    plugins: [
      vue(),
      createSvgIconsPlugin({
        // 指定要缓存的图标文件夹
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]'
      }),
      viteMockServe({
        mockPath: 'mock',
        enable: command === 'serve' // 保证开发阶段可以使用mock接口
      })
    ],
    server: {
      port: 5173
    },
    //src目录别名配置
    resolve: {
      alias: {
        '@': path.resolve('/src')
      }
    },
    //scss全局变量配置
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "@/styles/variables.scss";'
        }
      }
    }
  }
})
