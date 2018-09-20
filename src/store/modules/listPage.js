import md5 from "js-md5";
const listPage = {
  state: {
    nestedComponent: "",
    sideContentVisible: false,
    query: {}
  },
  mutations: {
    CHANGE_SIDE_CONTENT_STAET(state, val) {
      state.sideContentVisible = val;
    },
    CHANGE_NESTED_COMPONENT(state, val) {
      state.nestedComponent = val;
    }
  },
  actions: {
    showSideContent: function({ commit }, val) {
      commit("CHANGE_SIDE_CONTENT_STAET", val);
    },
    showComponent({ commit }, val) {
      commit("CHANGE_NESTED_COMPONENT", val);
    },
    "listPage:query": function({ state }, query) {
      state.query = query;
      state.queryMd5 = md5($utils.objectToString(query));
    }
  }
};

export default listPage;
