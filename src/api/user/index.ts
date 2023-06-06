// 统一管理用户相关的接口
import request from '@/utils/request'
import { loginFrom, loginResponseData, userResponseData } from './types'

// 统一管理接口
enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
}

export const reqLogin = (data: loginFrom) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data)
export const reqUserInfo = () =>
  request.get<any, userResponseData>(API.USERINFO_URL)
