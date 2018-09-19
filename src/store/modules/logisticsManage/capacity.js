const capacity = {
    state:{
        params:[]
    },
    mutations: {
    },
    actions: {
        "vehicleCapacityDetail:export": function({ state }) {
            window.location.href = `/webAPI/driver/export?search[driver_name]=${state.params[2]}&search[status]=${state.params[3]}&search[logistics_name]=${state.params[4]}`
        },
        "vehicleCapacityDetail:exportInit": function({ state },params) {
            state.params = params
        }
    }
};

export default capacity;
