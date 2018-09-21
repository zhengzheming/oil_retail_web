function initState() {
  return {
    nestedComponent: "",
    sideContentVisible: false,
    query: {},
    slideRoute: {},
    ref: null
  };
}
const listPage = {
  state: initState(),
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
    },
    "listPage:slide-route": function({ state }, route) {
      state.slideRoute = route;
    },
    "listPage:show-side-content": function(
      { dispatch },
      [isShowSideContent = false, routeName = "", query = {}]
    ) {
      dispatch("listPage:query", query);
      dispatch("showComponent", routeName);
      dispatch("showSideContent", isShowSideContent);
      dispatch("listPage:slide-route", { name: routeName });
    },
    "listPage:hide-side-content": function({ dispatch }) {
      // 侧拉处理
      dispatch("showSideContent", false);
      dispatch("listPage:query", {});
      // 收缩时 destroy动态组件
      dispatch("showComponent", "");
    },
    "listPage:reset": function({ state }) {
      Object.keys(state).forEach(key => {
        state[key] = initState()[key];
      });
    },
    "listPage:ref": function({ state }, ref) {
      state.ref = ref;
    },
    "listPage:search": function({ state }) {
      if (state.ref) {
        state.ref.getList();
      }
    }
  }
};

export default listPage;
