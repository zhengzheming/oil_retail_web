<template>
  <card :is-slide="isSlide">
    <span slot="title">物流企业详情</span>
    <item-list :com-data="itemList"/>
  </card>
</template>
<script>
import { detail } from "@/api/basicInfo/logisticsEnterprise/detail";
export default {
  data() {
    return {
      isSlide: false,
      itemList: {
        data: {},
        list: [
          {
            label: "企业名称",
            prop: "name"
          },
          {
            label: "银管家状态",
            prop: "out_status_name"
          },
          {
            label: "企业状态",
            prop: "status_name"
          }
        ]
      }
    };
  },
  created() {
    if (this.$route.query.logistics_id) {
      detail(this.$route.query.logistics_id)
        .then(res => {
          if (res.state === 0) {
            this.itemList.data = $utils.getDeepKey(res, "data");
          }
        })
        .catch(() => {});
    }
  },
  activated() {
    this.isSlide = true;
    if (this.$store.state.listPage.query.logistics_id) {
      detail(this.$store.state.listPage.query.logistics_id)
        .then(res => {
          if (res.state === 0) {
            this.itemList.data = $utils.getDeepKey(res, "data");
          }
        })
        .catch(() => {});
    }
  }
};
</script>
