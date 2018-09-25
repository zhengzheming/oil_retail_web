import router from "@/router/index";
import {
  logisticsQuotaLimitAdd,
  vehicleQuotaLimitAdd
} from "@/api/logisticsManage/limitQuota";
import { Message } from "element-ui";

const role = {
  state: {
    rate: ""
  },
  actions: {
    "enterpriseDayQuota:add": function({ dispatch }, params) {
      if (params && params.isSlide) {
        // 列表侧拉
        dispatch("listPage:show-side-content", ["enterpriseDayQuotaAdd"]);
      } else {
        // 列表跳转
        router.push({ name: "enterpriseDayQuotaAdd" });
      }
    },
    "vehicleDayQuota:add": function({ dispatch }, params) {
      if (params && params.isSlide) {
        // 列表侧拉
        dispatch("listPage:show-side-content", ["vehicleDayQuotaAdd"]);
      } else {
        // 列表跳转
        router.push({ name: "vehicleDayQuotaAdd" });
      }
    },
    "enterpriseDayQuotaAdd:after-hook": function({ rootState, dispatch }) {
      Message.success("保存成功");
      const listPageState = rootState.listPage;
      if (listPageState.slideRoute.name) {
        dispatch("listPage:hide-side-content");
        dispatch("listPage:search");
      } else {
        router.push({ name: "enterpriseDayQuota" });
      }
    },
    "enterpriseDayQuotaAdd:save": function({ state, dispatch }) {
      logisticsQuotaLimitAdd(state.rate / 100 || state.rate).then(res => {
        if (res.state == 0) {
          dispatch("enterpriseDayQuotaAdd:after-hook");
          // Message.success("保存成功");
          // router.push({ name: "enterpriseDayQuota" });
        }
      });
    },
    "vehicleDayQuotaAdd:after-hook": function({ rootState, dispatch }) {
      Message.success("保存成功");
      const listPageState = rootState.listPage;
      if (listPageState.slideRoute.name) {
        dispatch("listPage:hide-side-content");
        dispatch("listPage:search");
      } else {
        router.push({ name: "vehicleDayQuota" });
      }
    },
    "vehicleDayQuotaAdd:save": function({ state, dispatch }) {
      vehicleQuotaLimitAdd(state.rate / 100 || state.rate).then(res => {
        if (res.state == 0) {
          dispatch("vehicleDayQuotaAdd:after-hook");
          // Message.success("保存成功");
          // router.push({ name: "vehicleDayQuota" });
        }
      });
    },
    "enterpriseDayQuotaAdd:update": function({ state }, val) {
      state.rate = val;
    },
    "vehicleDayQuotaAdd:update": function({ state }, val) {
      state.rate = val;
    }
  }
};

export default role;
