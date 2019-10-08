/**
 * @author zhy 2019-10-08
 * @description 资讯-相关接口
 */
import { read } from '@/api'

export function newsList(params) { // 列表
  return read('/b2bapi', params)
}

