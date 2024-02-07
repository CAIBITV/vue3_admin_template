// 进行axios二次封装：使用请求与响应拦截器
import axios from 'axios'
import { ElMessage } from 'element-plus'
// 第一步：创建axios实例
const service = axios.create({
  // 基础路径
  baseURL: import.meta.env.VITE_APP_BASE_API,
  // 超时时间
  timeout: 5000
})
// 第二步：请求拦截器
service.interceptors.request.use((config) => {
  // config配置对象，hēaders请求头，经常给服务器携带公共参数
  // config.headers['token'] = '123'
  // 返回配置对象
  return config
})

// 第三步：响应拦截器
service.interceptors.response.use(
  (response) => {
    // response响应对象，data响应数据
    // 返回响应数据
    return response.data
  },
  (error) => {
    // error错误对象
    // 失败回调：处理http网络错误
    let errorMsg = ''
    // http状态码
    const statusCode = error.response.status
    switch (statusCode) {
      case 400:
        errorMsg = '请求参数错误'
        break
      case 401:
        errorMsg = '没有权限'
        break
      case 403:
        errorMsg = '登录过期'
        break
      case 404:
        errorMsg = '请求资源不存在'
        break
      case 500:
        errorMsg = '服务器错误'
        break
      default:
        errorMsg = '网络错误'
        break
    }
    ElMessage({
      type: 'error',
      message: errorMsg
      //   duration: 2000
    })
    return Promise.reject(error)
  }
)
// 对外暴露
export default service
