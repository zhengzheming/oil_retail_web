import Layout from "@/views/layout/Layout";
import commonList from "@/views/common/list/index";
import logisticsDetail from "@/views/basicInfo/logisticsEnterprise/detail";
import logisticsEdit from "@/views/basicInfo/logisticsEnterprise/edit";
import vehicleDataDetail from "@/views/basicInfo/vehicleData/detail";
import placeholderView from "../placeholderView";
import oilCompanyCreate from "@/views/basicInfo/oilCompany/create";
import oilCompanyDetail from "@/views/basicInfo/oilCompany/detail";
import oilGoodsCreate from "@/views/basicInfo/oilGoods/create";
import oilGoodsDetail from "@/views/basicInfo/oilGoods/detail";
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
      path: "vehicleData/detail",
      name: "vehicleDataDetail",
      component: vehicleDataDetail,
      hidden: true
    },
    {
      path: "oil-company",
      component: placeholderView,
      name: "oil-company",
      children: [
        {
          path: "index",
          name: "oil-company-list",
          component: commonList,
          meta: {
            title: "油企数据"
          }
        },
        {
          path: "create",
          name: "oil-company-create",
          component: oilCompanyCreate,
          meta: {
            title: "新增油企"
          }
        },
        {
          path: "modify",
          name: "oil-company-modify",
          component: oilCompanyCreate,
          meta: {
            title: "编辑油企"
          }
        },
        {
          path: "detail",
          name: "oil-company-detail",
          component: oilCompanyDetail,
          meta: {
            title: "油企详情"
          }
        }
      ]
    },
    {
      path: "oil-goods",
      component: placeholderView,
      children: [
        {
          path: "index",
          name: "oil-goods-list",
          component: commonList,
          meta: {
            title: "油品数据"
          }
        },
        {
          path: "create",
          name: "oil-goods-create",
          component: oilGoodsCreate,
          meta: {
            title: "新增油品"
          }
        },
        {
          path: "modify",
          name: "oil-goods-modify",
          component: oilGoodsCreate,
          meta: {
            title: "编辑油品"
          }
        },
        {
          path: "detail",
          name: "oil-goods-detail",
          component: oilGoodsDetail,
          meta: {
            title: "油品数据"
          }
        }
      ]
    }
  ]
};
