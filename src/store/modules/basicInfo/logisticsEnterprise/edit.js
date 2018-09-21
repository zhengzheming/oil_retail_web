import { save } from "@/api/basicInfo/logisticsEnterprise/edit";
import router from "@/router/index";
import { Message } from "element-ui";
const role = {
  state: {
    logistics_id: "",
    status: ""
  },
  mutations: {},
  actions: {
    "logisticsEdit:after-hook": function({ rootState, dispatch }) {
      Message.success("保存成功");
      const listPageState = rootState.listPage;
      if (listPageState.slideRoute.name) {
        dispatch("listPage:hide-side-content");
        dispatch("listPage:search");
      } else {
        router.push({ name: "logistics" });
      }
    },
    "logisticsEdit:save": function({ state, dispatch }) {
      save(state.logistics_id, state.status).then(res => {
        if (res.state == 0) {
          dispatch("logisticsEdit:after-hook");
        }
      });
    },
    "logisticsEdit:update-form": function({ state }, { logistics_id, status }) {
      state.logistics_id = logistics_id;
      state.status = status;
    }
  }
};

export default role;
