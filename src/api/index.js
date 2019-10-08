/**
 * @author zhy 2018-07-12
 * @description axios 封装
 */
import { fetch, fetch_get } from '@/utils/fetch'

// post
export function modify(url, data) {
  return fetch({
    url: url,
    data: data,
    method: 'post'
  })
}

// get
export function read(url, data) {
  return fetch_get({
    url: url,
    params: data,
    method: 'get'
  })
}
