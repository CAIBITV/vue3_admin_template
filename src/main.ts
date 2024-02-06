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

// 全局注册组件
// import SvgIcon from '@/components/SvgIcon/index.vue'
// app.component('SvgIcon', SvgIcon)

// 引入自定义插件对象：注册整个项目全局组件
import components from '@/components'
app.use(components)

// 引入模版的全局样式
import '@/styles/index.scss'

// 测试mock接口能否正常运行
import axios from 'axios'
// 登录接口
axios({
  url: '/api/user/login',
  method: 'post',
  data: {
    username: 'admin',
    password: '1111111'
  }
})

app.mount('#app')
