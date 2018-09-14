import Layout from "@/views/layout/Layout";
import commonList from "@/views/common/list/index";
import placeholderView from "../placeholderView";
import oilStationCreate from "@/views/oilStationManage/oilStation/create";
import oilStationDetail from "@/views/oilStationManage/oilStation/detail";
export default {
  path: "/oil-station-manage",
  name: "oil-station-manage",
  component: Layout,
  meta: {
    title: "油站管理",
    icon: "icon icon-shezhi"
  },
  children: [
    {
      path: "oil-station",
      component: placeholderView,
      name: "oil-station",
      children: [
        {
          path: "index",
          name: "oil-station-list",
          component: commonList,
          meta: {
            title: "油站数据"
          }
        },
        {
          path: "create",
          name: "oil-station-create",
          component: oilStationCreate,
          meta: {
            title: "新增油站"
          }
        },
        {
          path: "modify",
          name: "oil-station-modify",
          component: oilStationCreate,
          meta: {
            title: "编辑油站"
          }
        },
        {
          path: "detail",
          name: "oil-station-detail",
          component: oilStationDetail,
          meta: {
            title: "油站详情"
          }
        }
      ]
    }
  ]
};
