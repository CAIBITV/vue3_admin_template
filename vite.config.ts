import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// SVG图标插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      // Specify the icon folder to be cached
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      // Specify symbolId format
      symbolId: 'icon-[dir]-[name]'
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
})
