<template>
  <card>
    <span slot="title">系统模块详情</span>
    <item-list :com-data="detailData"/>
  </card>
</template>
<script>
import { detail } from "@/api/system/module-manage";
export default {
  data() {
    return {
      detailData: {
        data: {},
        list: [
          {
            label: "名称",
            prop: "name"
          },
          {
            label: "权限码",
            prop: "code"
          },
          {
            label: "所属系统",
            prop: ""
          },
          {
            label: "排序码",
            prop: "order_index"
          },
          {
            label: "操作",
            prop: ""
          },
          {
            label: "页面链接",
            prop: "page_url"
          },
          {
            label: "是否公开",
            prop: "is_public"
          },
          {
            label: "是否外部链接",
            prop: "is_external"
          },
          {
            label: "状态",
            prop: "status"
          },
          {
            label: "更新时间",
            prop: "update_time"
          },
          {
            label: "是否菜单",
            prop: "is_menu"
          },
          {
            label: "备注",
            prop: "remark"
          }
        ]
      }
    };
  },
  mounted() {
    detail(this.$route.query.id).then(res => {
      if (res.state == 0) {
        this.detailData.data = $utils.getDeepKey(res, "data");
      }
    });
  }
};
</script>
