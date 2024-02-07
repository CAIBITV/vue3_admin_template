// 统一管理项目用户接口
import request from '@/utils/request'
import type {
  loginFormData,
  loginResponseData,
  userInfoReponseData
} from './type'
enum API {
  LOGIN_URL = '/user/login',
  USER_INFO = '/user/info'
}
// 暴露请求函数
// export function login(data: any) {
//   return request({
//     url: API.LOGIN_URL,
//     method: 'post',
//     data
//   })
// }
export const reqLogin = (data: loginFormData) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data)
export const reqUserInfo = () =>
  request.get<any, userInfoReponseData>(API.USER_INFO)
