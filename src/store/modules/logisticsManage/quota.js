const role = {
  state:{
    params:[]
  },
  mutations: {
  },
  actions: {
    "enterpriseQuota:export": function({ state }) {
        window.location.href = `/webAPI/logisticsQuota/export?search[logistics_name]=${state.params[2]}&search[status]=${state.params[3]}`
      },
    "enterpriseQuota:exportInit": function({ state },params) {
        state.params = params
      }
  }
};

export default role;
