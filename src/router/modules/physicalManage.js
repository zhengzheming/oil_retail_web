import Layout from "@/views/layout/Layout";
import commonList from '@/views/common/list/index';
// 司机信息
import driverDetail from '@/views/logisticsManage/driverDetail';
// 企业额度
import availableCredit from '@/views/logisticsManage/availableCredit';
import dayCredit from '@/views/logisticsManage/dayCredit';
export default {
  path: '/logistics-manage',
  name: 'logistics-manage',
  component: Layout,
  meta: {
    title: '物流企业管理',
    icon: 'icon icon-shezhi'
  },
  children: [
    // 司机信息
    {
        path: 'driver/list',
        name: 'driver',
        component: commonList,
        meta: {title: '司机信息'}
    },
    {
        path: 'driver/detail',
        name: 'driverDetail',
        component: driverDetail,
        meta: {title: '司机信息'}
    },
    // 企业额度
     {
        path: 'quote',
        name: 'enterprise-quota',
        component: commonList,
        meta: {title: '企业额度'}
      },
      {
        path: 'available-credit',
        name: 'available-credit',
        component: availableCredit,
        meta: {title: '企业收支明细'}
      },
      {
        path: 'day-credit',
        name: 'day-credit',
        component: dayCredit,
        meta: {title: '企业当日可用额度收支明细'}
      },
      // 车辆容量
      {
        path: 'capacity',
        name: 'vehicle-capacity',
        component: commonList,
        meta: {title: '车辆容量'}
      }
  ]
}