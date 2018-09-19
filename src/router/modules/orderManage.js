import Layout from "@/views/layout/Layout";
import commonList from "@/views/common/list/index";
import orderManageDetail from "@/views/orderManage/detail";
export default {
  path: "/order-manage",
  name: "order-manage",
  component: Layout,
  children: [
    {
      path: "order/index",
      name: "order-list",
      component: commonList,
      meta: {
        module: "/order-manage/order/index"
      }
    },
    {
      path: "order/detail",
      name: "order-detail",
      component: orderManageDetail,
      meta: {
        module: "/order-manage/order/detail"
      }
    }
  ]
};
