/**
 * @author zhy 2019-01-05
 * @description 学生干部履历-相关接口
 */
import { read } from '@/api'

export function newsList(params) { // 列表
  return read('/b2bapi', params)
}

