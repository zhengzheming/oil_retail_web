import Layout from "@/views/layout/Layout";
import logistics from '@/views/common/list/index'
import logisticsDetail from '@/views/basicInfo/logisticsEnterprise/detail'
import logisticsEdit from '@/views/basicInfo/logisticsEnterprise/edit'
export default {
  path: '/basic-info',
  name: 'basic-info',
  component: Layout,
  meta: {
    title: '基础数据',
    icon: 'icon icon-shezhi'
  },
  children: [
    {
        path: 'logistics/list',
        name: 'logistics',
        component: logistics,
        meta: {title: '物流企业'}
    },
    {
        path: 'logistics/detail',
        name:'logisticsDetail',
        component: logisticsDetail,
        hidden: true
    },
    {
      path: 'logistics/edit',
      name:'logisticsEdit',
      component: logisticsEdit,
      hidden: true
    },
    {
      path: 'logistics11',
      name: 'logistics1',
      component: logistics,
      meta: {
        title: '车辆管理'
      }
    }
  ]
}