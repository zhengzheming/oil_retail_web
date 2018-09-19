import Layout from "@/views/layout/Layout";
import priceImport from "@/views/priceManage/priceApply/import.vue";
export default {
  path: "/price-manage",
  name: "price-manage",
  component: Layout,
  children: [
    {
      path: "price-import-create",
      name: "price-import-create",
      component: priceImport,
      meta: {
        module: "/price-manage/price-import-create"
      }
    }
  ]
};
