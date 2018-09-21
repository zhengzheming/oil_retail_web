<template>
  <card>
    <item-list :com-data="itemList"/>
  </card>
</template>
<script>
import { detail } from "@/api/basicInfo/logisticsEnterprise/detail";
import { getMap } from "@/api/basicInfo/logisticsEnterprise/edit";
export default {
  data() {
    return {
      statuVal: "",
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
            type: "slt",
            label: "企业状态",
            prop: "status",
            data: []
          }
        ]
      }
    };
  },
  watch: {
    itemList: {
      handler: function(val) {
        if (val.data.hasOwnProperty("status")) {
          let logistics_id = this.$route.query.logistics_id;
          if(this.$store.state.listPage.slideRoute.name){
            logistics_id = this.$store.state.listPage.query.logistics_id;
          }
          this.$store.dispatch("logisticsEdit:update-form", {
            logistics_id: logistics_id,
            status: val.data["status"]
          });
        }
      },
      immediate: true,
      deep: true
    }
  },
  created() {
    this.$store.dispatch("logisticsEdit:update-form", {
      logistics_id: this.$route.query.logistics_id,
      status: this.statuVal
    });
    if (this.$route.query.logistics_id) {
      detail(this.$route.query.logistics_id)
        .then(res => {
          if (res.state === 0) {
            this.itemList.data = $utils.getDeepKey(res, "data");
            this.statuVal = $utils.getDeepKey(res, "data.status");
          }
        })
        .catch(() => {});
    }
    getMap().then(res => {
      if (res.state == 0) {
        this.itemList.list[2].data = $utils.getDeepKey(
          res,
          "data.logistics_company_status"
        );
      }
    });
  },
  activated() {
    this.$store.dispatch("logisticsEdit:update-form", {
      logistics_id: this.$store.state.listPage.query.logistics_id,
      status: this.statuVal
    });
    if (this.$store.state.listPage.query.logistics_id) {
      detail(this.$store.state.listPage.query.logistics_id)
        .then(res => {
          if (res.state === 0) {
            this.itemList.data = $utils.getDeepKey(res, "data");
            this.statuVal = $utils.getDeepKey(res, "data.status");
          }
        })
        .catch(() => {});
    }
    getMap().then(res => {
      if (res.state == 0) {
        this.itemList.list[2].data = $utils.getDeepKey(
          res,
          "data.logistics_company_status"
        );
      }
    });
  }
};
</script>
