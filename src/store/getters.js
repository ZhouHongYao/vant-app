const getters = {
  pageSizes: state => state.pageSizes,
  pageSize: state => state.pageSize,
  head: state => state.user.userinfo.head || '',
  name: state => state.user.userinfo.name || '',
  Request_Head: state => {
    return {
      'Authorization': state.user.userinfo.token || ''
    }
  }
}
export default getters
