const breadcrumb = {
  state: {
    actions: {}
  },
  actions: {
    "breadcrumb:update-actions": function({ state }, data) {
      state.actions = data;
    }
  }
};

export default breadcrumb;
