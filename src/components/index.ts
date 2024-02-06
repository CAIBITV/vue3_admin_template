//引入项目中全部的全局组件
import SvgIcon from './SvgIcon/index.vue'
import type { App, Component } from 'vue'
const components: { [name: string]: Component } = { SvgIcon }
// 对外暴露插件对象
export default {
  install(app: App) {
    // 注册项目全部的全局组件
    Object.keys(components).forEach((key: string) => {
      app.component(key, components[key])
    })
  }
}
