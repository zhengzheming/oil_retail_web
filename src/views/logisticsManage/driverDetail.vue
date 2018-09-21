<template>
  <div>
    <card :is-slide="true">
      <span slot="title">用户信息</span>
      <item-list :com-data="userInfo"/>
    </card>
    <card>
      <span slot="title">车辆信息</span>
      <p>
        <span
          v-for="item of vehicleList"
          :key="item.number"
          style="border:1px solid #e6e6e6;border-radius:2px;width:100px;height:32px;line-height:32px;
            text-align:center;color:#333;font-size:14px;display:inline-block;margin-right:24px;">{{ item.number }}</span>
      </p>
    </card>
  </div>
</template>
<script>
import { detail } from "@/api/logisticsManage/driverDetail";
export default {
  data() {
    return {
      userInfo: {
        data: {},
        list: [
          {
            label: "姓名",
            prop: "name"
          },
          {
            label: "所属企业",
            prop: "logistics_name"
          },
          {
            label: "手机号",
            prop: "phone"
          },
          {
            label: "是否可用",
            prop: "status_name"
          }
        ]
      },
      vehicleList: []
    };
  },
  created() {
    if (this.$route.query.customer_id) {
      detail(this.$route.query.customer_id).then(res => {
        if (res.state == 0) {
          this.userInfo.data = $utils.getDeepKey(res, "data");
          this.vehicleList = $utils.getDeepKey(res, "data.vehicles");
        }
      });
    }
  },
  activated() {
    if (this.$store.state.listPage.query.customer_id) {
      detail(this.$store.state.listPage.query.customer_id).then(res => {
        if (res.state == 0) {
          this.userInfo.data = $utils.getDeepKey(res, "data");
          this.vehicleList = $utils.getDeepKey(res, "data.vehicles");
        }
      });
    }
  }
};
</script>
