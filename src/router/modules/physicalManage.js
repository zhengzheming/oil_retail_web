import Layout from "@/views/layout/Layout";
import empty from "@/views/layout/empty";
import commonList from "@/views/common/list/index";
import addLimit from "@/views/logisticsManage/addLimit";
// 司机信息
import driverDetail from "@/views/logisticsManage/driverDetail";
export default {
  path: "/logistics-manage",
  name: "logisticsManage",
  component: Layout,
  meta: {
    title: "物流企业管理",
    icon: "icon icon-shezhi"
  },
  children: [
    // 司机信息
    {
      path: "driver/list",
      name: "driver",
      component: commonList,
      meta: {
        module: "/logistics-manage/driver/list"
      }
    },
    {
      path: "driver/detail",
      name: "driverDetail",
      component: driverDetail,
      meta: {
        module: "/logistics-manage/driver/list"
      }
    },
    // 每日限额设置
    {
      path: "limit-quota",
      name: "limitQuota",
      component: empty,
      meta: { title: "每日限额设置" },
      children: [
        // 企业每日限额
        {
          path: "enterprise",
          name: "enterpriseDayQuota",
          component: commonList,
          meta: {
            module: "/logistics-manage/limit-quota/enterprise"
          }
        },
        {
          path: "enterprise/add",
          name: "enterpriseDayQuotaAdd",
          component: addLimit,
          meta: {
            module: "/logistics-manage/limit-quota/enterprise"
          }
        },
        // 车辆每日限额
        {
          path: "vehicle",
          name: "vehicleDayQuota",
          component: commonList,
          meta: {
            module: "/logistics-manage/limit-quota/vehicle"
          }
        },
        {
          path: "vehicle/add",
          name: "vehicleDayQuotaAdd",
          component: addLimit,
          meta: {
            module: "/logistics-manage/limit-quota/vehicle"
          }
        }
      ]
    },
    // 企业额度
    {
      path: "quota",
      name: "enterpriseQuota",
      component: commonList,
      meta: {
        module: "/logistics-manage/quota"
      }
    },
    {
      path: "available-credit",
      name: "availableCredit",
      component: commonList,
      meta: {
        module: "/logistics-manage/available-credit"
      }
    },
    {
      path: "day-credit",
      name: "dayCredit",
      component: commonList,
      meta: {
        module: "/logistics-manage/day-credit"
      }
    }
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
};
