import { createOilStationApply } from "@/api/oilStationManage/oilStation";
import { oilStationFieldMap } from "@/services/fieldMap";
import { fetchOilStationApplyDetail } from "@/api/oilStationManage/oilStation";
import { Message } from "element-ui";
import router from "@/router/index";
const oilStation = {
  state: {
    create: {
      form: {},
      formRef: null
    },
    detail: {
      form: {}
    }
  },
  mutations: {
    UPDATE_OIL_STATION_DETAIL(state, detail) {
      state.detail.form = $utils.renameKeys(oilStationFieldMap, detail);
      state.detail.form.status = String(state.detail.form.status);
    }
  },
  actions: {
    "oil-station-list:create": function() {
      router.push({ name: "oil-station-create" });
    },
    "oil-station-create:submit": function({ state }) {
      const formRef = state.create.formRef;
      const form = state.create.form;
      if (!formRef) return;
      formRef.validate(valid => {
        if (valid) {
          let data = {
            ...form
          };
          createOilStationApply(data, true).then(() => {
            Message.success("提交成功");
            router.push({ name: "oil-station-list" });
          });
        }
      });
    },
    "oil-station-create:save": function({ state, rootState }) {
      const formRef = state.create.formRef;
      const form = state.create.form;
      if (!formRef) return;
      formRef.validate(valid => {
        if (valid) {
          let data = {
            ...form
          };
          createOilStationApply(data, false).then(() => {
            const infoMap = {
              "oil-station-create": "添加油站成功",
              "oil-station-modify": "修改油站成功"
            };
            Message.success(infoMap[rootState.route.name]);
            router.push({ name: "oil-station-list" });
          });
        }
      });
    },
    "oil-station-modify:save": function({ dispatch }) {
      dispatch("oil-station-create:save");
    },
    "oil-station-modify:submit": function({ dispatch }) {
      dispatch("oil-station-create:submit");
    },
    "oil-station-create:update-form": function({ state }, { form, formRef }) {
      state.create.form = form;
      state.create.formRef = formRef;
    },
    "oil-station-detail:fetch-form": function({ commit, rootState, state }) {
      return fetchOilStationApplyDetail(rootState.route.query.applyId).then(
        res => {
          commit("UPDATE_OIL_STATION_DETAIL", res.data);
          return state.detail.form;
        }
      );
    },
    "oil-station-detail:modify": function({ rootState }) {
      router.push({ name: "oil-station-modify", query: rootState.route.query });
    }
  }
};

export default oilStation;
