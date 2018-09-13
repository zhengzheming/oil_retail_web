import Layout from "@/views/layout/Layout";
import commonList from '@/views/common/list/index';
// 司机信息
import driverDetail from '@/views/logisticsManage/driverDetail';
export default {
  path: '/logistics-manage',
  name: 'logisticsManage',
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
        hidden: true
    },
    // 企业每日限额
    {
      path: 'enterprise-day-quota',
      name: 'enterpriseDayQuota',
      component: commonList,
      meta: {title: '企业每日限额'}
    },
    // 车辆每日限额
    {
      path: 'vehicle-day-quota',
      name: 'vehicleDayQuota',
      component: commonList,
      meta: {title: '车辆每日限额'}
    },
    // 企业额度
     {
        path: 'quote',
        name: 'enterpriseQuota',
        component: commonList,
        meta: {title: '企业额度'}
      },
      {
        path: 'available-credit',
        name: 'availableCredit',
        component: commonList,
        hidden: true
      },
      {
        path: 'day-credit',
        name: 'dayCredit',
        component: commonList,
        hidden: true
      },
      // 车辆容量
      // {
      //   path: 'capacity/list',
      //   name: 'vehicleCapacity',
      //   component: commonList,
      //   meta: {title: '车辆容量'}
      // },
      // {
      //   path: 'capacity/detail',
      //   name: 'vehicleCapacityDetail',
      //   component: commonList,
      //   hidden: true
      // }
  ]
}