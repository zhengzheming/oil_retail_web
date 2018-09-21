import breadCrumbConfig from "@/services/breadcrumb/index";
const breadcrumb = {
  state: {
    actions: {},
    config: breadCrumbConfig
  },
  actions: {
    "breadcrumb:update-actions": function({ state }, data) {
      state.actions = data;
    }
  }
};

export default breadcrumb;
