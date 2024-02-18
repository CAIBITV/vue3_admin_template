// 创建用户相关的小仓库
import { defineStore } from 'pinia'
// 引入接口
import { reqLogin } from '@/api/user'
// 引入数据类型
import type { loginFormData, loginResponseData } from '@/api/user/type'
import type { UserState } from '@/store/modules/types/type'
// 引入操作本地存储的方法
import { SET_TOKEN, GET_TOKEN } from '@/utils/token'

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    token: GET_TOKEN() // 用户token
  }),
  getters: {},
  actions: {
    async userLogin(userInfo: loginFormData) {
      // 登录请求
      const res: loginResponseData = await reqLogin(userInfo)
      // 成功：200 => token
      // 失败：201 => 登录失败错误信息
      if (res.code === 200) {
        // pinia仓库存储一下token
        this.token = res.data.token as string

        // 由于 pinia/vuex 存储数据其实是js对象
        // 本地存储持久化
        SET_TOKEN(res.data.token!)
        // 保证async函数返回一个成功的promise
        return 'ok'
      } else {
        return Promise.reject(new Error(res.data.message))
      }
    }
  }
})
