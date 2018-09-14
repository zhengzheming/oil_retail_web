import router from "@/router/index";
import {logisticsQuotaLimitAdd,vehicleQuotaLimitAdd} from '@/api/logisticsManage/limitQuota'
import { Message } from "element-ui";

const role = {
  state: {
    rate: ""
  },
  actions: {
    "enterpriseDayQuota:add": function() {
      router.push({ name: "enterpriseDayQuotaAdd" });
    },
    actions: {
        "enterpriseDayQuota:add": function() {
            router.push({name:'enterpriseDayQuotaAdd'})
            },
          "vehicleDayQuota:add": function() {
            router.push({name:'vehicleDayQuotaAdd'})
          },
          "enterpriseDayQuotaAdd:save": function({state}) {
            logisticsQuotaLimitAdd(state.rate/100)
            .then(res => {
                if(res.state == 0){
                    Message.success('保存成功');
                    router.push({name:'enterpriseDayQuota'})
                }
            })
            },
          "vehicleDayQuotaAdd:save": function({state}) {
            vehicleQuotaLimitAdd(state.rate/100)
            .then(res => {
                if(res.state == 0){
                    Message.success('保存成功');
                    router.push({name:'vehicleDayQuota'})
                }
            })
          },
          "enterpriseDayQuotaAdd:update": function({state},val) {
                state.rate = val;
            },
          "vehicleDayQuotaAdd:update": function({state},val) {
            state.rate = val;
          }
    }
  }
};

export default role;
