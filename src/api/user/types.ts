// 登录接口需要携带的数据类型

export interface loginFrom {
  username: string
  password: string
}

interface dataType {
  token: string
}
// 登录返回数据
export interface loginResponseData {
  code: number
  data: dataType
}

interface userInfo {
  userId: number
  avatar: string
  username: string
  password: string
  desc: string
  roles: string[]
  buttons: string[]
  routes: string[]
  token: string
}
interface user {
  checkUser: userInfo
}
// 服务器返回用户信息相关的参数
export interface userResponseData {
  code: number
  data: user
}
