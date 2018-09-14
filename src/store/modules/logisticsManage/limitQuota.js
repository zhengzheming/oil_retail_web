import router from "@/router/index";

const role = {
    actions: {
      "enterpriseDayQuota:add": function() {
        router.push({name:'enterpriseDayQuotaAdd'})
        },
      "vehicleDayQuota:add": function() {
        router.push({name:'vehicleDayQuotaAdd'})
        }
    }
  };
  
  export default role;
  