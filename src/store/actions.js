// 一个 store.dispatch 在不同模块中可以触发多个 action 函数。在这种情况下，只有当所有触发函数完成后，返回的 Promise 才会执行。
const actions = {
  setPageSize({ commit }, data) {
    commit('setPageSize', data)
  },
  // 存储用户TOKEN
  setToken({ commit }, data) {
    commit('setToken', data)
  },
  // 存储用户信息
  setUserinfo({ commit }, data) {
    commit('setUserinfo', data)
  }
}

export default actions
