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
        path: 'logistics',
        name: 'logistics',
        component: logistics,
        meta: {title: '物流企业'},
        // children:[
        //     {
        //         path: 'detail',
        //         component: logisticsDetail,
        //         hidden: true
        //     },
        //     {
        //         path: 'detail',
        //         component: logisticsEdit,
        //         hidden: true
        //     }
        // ]
      },
      {
        path: 'logistics',
        name: 'logistics1',
        component: logistics,
        meta: {
          title: '车辆管理'
        }
      }
  ]
}