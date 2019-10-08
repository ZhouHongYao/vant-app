const getters = {
  pageSizes: state => state.pageSizes,
  pageSize: state => state.pageSize,
  phone: state => state.user.userinfo.phone || ''
}

export default getters
