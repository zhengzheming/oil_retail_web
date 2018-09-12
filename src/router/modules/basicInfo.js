import Layout from "@/views/layout/Layout";
import commonList from '@/views/common/list/index'
import logisticsDetail from '@/views/basicInfo/logisticsEnterprise/detail'
import logisticsEdit from '@/views/basicInfo/logisticsEnterprise/edit'
import vehicleDataDetail from '@/views/basicInfo/vehicleData/detail'
export default {
  path: "/basic-info",
  name: "basic-info",
  component: Layout,
  meta: {
    title: "基础数据",
    icon: "icon icon-shezhi"
  },
  children: [
    //物流企业
    {
      path: "logistics/list",
      name: "logistics",
      component: commonList,
      meta: { title: "物流企业" }
    },
    {
      path: "logistics/detail",
      name: "logisticsDetail",
      component: logisticsDetail,
      hidden: true
    },
    {
      path: "logistics/edit",
      name: "logisticsEdit",
      component: logisticsEdit,
      hidden: true
    },
    //车辆数据
    {
      path: "vehicleData/list",
      name: "vehicleData",
      component: commonList,
      meta: {
        title: "车辆数据"
      }
    },
    {
      path: 'vehicleData/detail',
      name: 'vehicleDataDetail',
      component: vehicleDataDetail,
      hidden: true
    }
  ]
};
