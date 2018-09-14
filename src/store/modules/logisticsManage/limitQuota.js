import router from "@/router/index";

const role = {
    state:{
        rate:''
    },
    actions: {
        "enterpriseDayQuota:add": function() {
            router.push({name:'enterpriseDayQuotaAdd'})
            },
          "vehicleDayQuota:add": function() {
            router.push({name:'vehicleDayQuotaAdd'})
          },
          "enterpriseDayQuota:save": function() {
            router.push({name:'enterpriseDayQuotaAdd'})
            },
          "vehicleDayQuota:save": function() {
            router.push({name:'vehicleDayQuotaAdd'})
          }
    }
  };
  
  export default role;
  