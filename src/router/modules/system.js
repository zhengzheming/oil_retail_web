import Layout from "@/views/layout/Layout";
import systemUser from '@/views/system/user/index'
export default {
  path: '/system',
  name: 'system',
  component: Layout,
  meta: {
    title: '系统管理',
    icon: 'icon icon-shezhi'
  },
  children: [
    {
      path: 'user',
      name: 'system-user',
      component: systemUser,
      meta: {
        title: '用户管理'
      }
    }
  ]
}
