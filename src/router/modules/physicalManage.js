import Layout from "@/views/layout/Layout";
import quotaList from '@/views/common/list/index'
import capacityList from '@/views/common/list/index'
export default {
  path: '/logistics-manage',
  name: 'logistics-manage',
  component: Layout,
  meta: {
    title: '物流企业管理',
    icon: 'icon icon-shezhi'
  },
  children: [
    {
        path: 'quote',
        name: 'enterprise-quota',
        component: quotaList,
        meta: {title: '企业额度'},
      },
      {
        path: 'capacity',
        name: 'enterprise-capacity',
        component: capacityList,
        meta: {title: '车辆容量'}
      }
  ]
}