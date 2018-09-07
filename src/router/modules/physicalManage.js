import Layout from "@/views/layout/Layout";
import quotaList from '@/views/common/list/index'
import capacityList from '@/views/common/list/index'
import availableCredit from '@/views/logisticsManage/availableCredit'
import dayCredit from '@/views/logisticsManage/dayCredit'
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
        meta: {title: '企业额度'}
      },
      {
        path: 'available-credit',
        name: 'available-credit',
        component: quotaList,
        meta: {title: '企业可用额度收支明细'}
      },
      {
        path: 'day-credit',
        name: 'day-credit',
        component: quotaList,
        meta: {title: '企业可用额度收支明细'}
      },
      {
        path: 'capacity',
        name: 'vehicle-capacity',
        component: capacityList,
        meta: {title: '车辆容量'}
      }
  ]
}