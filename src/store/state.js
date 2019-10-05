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
 * userGroup：用户组数据
 * @type {arr}
 */
const userGroup = []

/**
 * [user 用户登录信息]
 * @type {Object}
 */
const user = {
  userinfo: {},
  rules: []
}

/**
 * [methodData 传值方式]
 * @type {Object}
 * @author zhy
 */
const methodData = [{
  title: 'PUT'
}, {
  title: 'GET'
}, {
  title: 'POST'
}, {
  title: 'DELETE'
}]

const state = {
  pageSizes: pageSizes,
  pageSize: pageSize,
  user: user,
  methodData: methodData,
  userGroup: userGroup
}

export default state
