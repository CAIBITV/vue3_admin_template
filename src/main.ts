import { createApp } from 'vue'
import App from '@/App.vue'

// 引入element-plus及样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 配置element-plus的国际化
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

// SVG插件配置
import 'virtual:svg-icons-register'

const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn
})

console.log(import.meta.env)

app.mount('#app')
