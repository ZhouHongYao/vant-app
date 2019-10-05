import Layout from '@/views/layout/index'

const newsRouter = {
  path: '/news',
  name: 'news',
  component: Layout,
  redirect: { name: 'list' },
  meta: {
    title: '资讯'
  },
  children: [
    {
      path: 'list',
      name: 'list',
      component: () => import('@/views/news/list'),
      meta: { title: '资讯列表' }
    }, {
      path: 'detail',
      name: 'detail',
      component: () => import('@/views/news/detail'),
      props: (route) => ({ query: route.query.q }), // query 传值配置
      meta: { title: '资讯详情' }
    }]
}

export default newsRouter
