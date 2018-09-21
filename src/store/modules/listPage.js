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
      [routeName = "", query = {}]
    ) {
      dispatch("listPage:query", query);
      dispatch("showComponent", routeName);
      dispatch("showSideContent", true);
      dispatch("listPage:slide-route", { name: routeName });
    },
    "listPage:hide-side-content": function({ dispatch }) {
      dispatch("listPage:query", {});
      dispatch("showComponent", "");
      dispatch("showSideContent", false);
      dispatch("listPage:slide-route", { name: "" });
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
