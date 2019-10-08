/**
 * 定义每页显示记录条数的下拉菜单选项
 * @type {Array}
 */
const pageSizes = [5, 10, 15, 20, 50, 100]

/**
 * pageSize：定义每页默认显示记录条数
 * @type {int}
 */
const pageSize = 10

/**
 * token
 * @type {string}
 */
const token = ''

/**
 * [user 用户登录信息]
 * @type {Object}
 */
const user = {
  userinfo: {},
  rules: []
}

const state = {
  pageSizes: pageSizes,
  pageSize: pageSize,
  token: token,
  user: user
}

export default state
