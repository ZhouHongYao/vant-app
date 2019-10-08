/**
 * @author zhy 2019-10-08
 * @description 登录-相关接口
 */
import { modify } from '@/api'

export function loginBypwd(params) { // 密码登录
  return modify('/commonapi/?action=Indexs.LoginImgPwd', params)
}

export function getUser(params) { // 用户信息
  return modify('/commonapi/?action=User.GetUser', params)
}
