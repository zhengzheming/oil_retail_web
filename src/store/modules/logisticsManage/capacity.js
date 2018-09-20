const capacity = {
  state: {
    params: []
  },
  mutations: {},
  actions: {
    "vehicleCapacity:export": function({ state }) {
      window.location.href = `/webAPI/vehicleQuota/export?search[logistics_name]=${
        state.params[2]
      }&search[number]=${state.params[3]}`;
    },
    "vehicleCapacity:exportInit": function({ state }, params) {
      state.params = params;
    }
  }
};

export default capacity;
