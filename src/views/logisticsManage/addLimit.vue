<template>
  <div>
    <card :is-slide="true">
      <span slot="title">当前额度信息</span>
      <item-list :com-data="currentInfo"/>
    </card>
    <card>
      <span slot="title">新增额度信息</span>
      <p style="line-height: 32px;">{{ text1 }}<span style="color: #666;">当日可用额度：</span>  不超过{{ text2 }}<el-input
        v-model="val"
        style="width:100px;margin:0 5px;display:inline-block;"
        type="text"/>%</p>
    </card>
  </div>
</template>

<script>
import {
  logisticsQuotaLimit,
  vehicleQuotaLimit
} from "@/api/logisticsManage/limitQuota";
export default {
  data() {
    let textMap1,textMap2
    if(this.$store.state.listPage.sideContentVisible){
      textMap1 = {
        enterpriseDayQuota: "企业",
        vehicleDayQuota: "车辆"
      };
      textMap2 = {
        enterpriseDayQuota: "企业额度",
        vehicleDayQuota: "车辆油箱容量"
      };
    }else{
      textMap1 = {
        enterpriseDayQuotaAdd: "企业",
        vehicleDayQuotaAdd: "车辆"
      };
      textMap2 = {
        enterpriseDayQuotaAdd: "企业额度",
        vehicleDayQuotaAdd: "车辆油箱容量"
      };
    }
    return {
      val: 0,
      text1: textMap1[this.$route.name],
      text2: textMap2[this.$route.name],
      currentInfo: {
        data: {},
        list: [],
        // styleObj: "width:100%;"
      }
    };
  },
  watch: {
    val: function(newVal) {
      if(this.$store.state.listPage.sideContentVisible){
        this.$store.dispatch(`${this.$store.state.listPage.slideRoute.name}:update`, newVal);
      }else{
        this.$store.dispatch(`${this.$route.name}:update`, newVal);
      }

    }
  },
  created() {
    this.currentInfo.list = [
      {
        label: `${this.text1}当日可用额度`,
        prop: "rate"
      },
      {
        label: "上次变更时间",
        prop: "create_time"
      }
    ];
    let apiMap = {}
    if(this.$store.state.listPage.sideContentVisible){
      apiMap = {
        enterpriseDayQuota: {
          name: logisticsQuotaLimit,
          txt: "不超过企业额度"
        },
        vehicleDayQuota: {
          name: vehicleQuotaLimit,
          txt: "不超过车辆油箱容量"
        }
      };
      this.$store.dispatch(`${this.$store.state.listPage.slideRoute.name}:update`, this.val);
    }else{
      apiMap = {
        enterpriseDayQuotaAdd: {
          name: logisticsQuotaLimit,
          txt: "不超过企业额度"
        },
        vehicleDayQuotaAdd: {
          name: vehicleQuotaLimit,
          txt: "不超过车辆油箱容量"
        }
      };
      this.$store.dispatch(`${this.$route.name}:update`, this.val);
    }

    apiMap[this.$route.name].name().then(res => {
      if (res.data && res.data.rate) {
        this.val = (Number(res.data.rate) * 100).toFixed(2);
        res.data.rate =
          apiMap[this.$route.name].txt +
          (Number(res.data.rate) * 100).toFixed(2) +
          "%";
      }
      this.currentInfo.data = res.data || {};
    });
  },
  activated(){
    this.currentInfo.list = [
      {
        label: `${this.text1}当日可用额度`,
        prop: "rate"
      },
      {
        label: "上次变更时间",
        prop: "create_time"
      }
    ];
    this.$store.dispatch(`${this.$store.state.listPage.slideRoute.name}:update`, this.val);
    const apiMap = {
      enterpriseDayQuotaAdd: {
        name: logisticsQuotaLimit,
        txt: "不超过企业额度"
      },
      vehicleDayQuotaAdd: {
        name: vehicleQuotaLimit,
        txt: "不超过车辆油箱容量"
      }
    };
    apiMap[this.$store.state.listPage.slideRoute.name].name().then(res => {
      if (res.data && res.data.rate) {
        this.val = (Number(res.data.rate) * 100).toFixed(2);
        res.data.rate =
          apiMap[this.$store.state.listPage.slideRoute.name].txt +
          (Number(res.data.rate) * 100).toFixed(2) +
          "%";
      }
      this.currentInfo.data = res.data || {};
    });
  }
};
</script>
