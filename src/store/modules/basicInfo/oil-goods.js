import { createOilCompany } from "@/api/basicInfo/oilGoods";
import { oilCompanyFieldMap } from "@/services/fieldMap";
import { fetchOilCompanyDetail } from "@/api/basicInfo/oilGoods";
import { Message } from "element-ui";
import router from "@/router/index";
const oilGoods = {
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
    UPDATE_OIL_GOODS_DETAIL(state, detail) {
      state.detail.form = $utils.renameKeys(oilCompanyFieldMap, detail);
      state.detail.form.ownership = String(state.detail.form.ownership);
      state.detail.form.status = String(state.detail.form.status);
    }
  },
  actions: {
    "oil-goods-list:create": function() {
      router.push({ name: "oil-goods-create" });
    },
    "oil-goods-create:save": function({ state, rootState }) {
      const formRef = state.create.formRef;
      const form = state.create.form;
      if (!formRef) return;
      formRef.validate(valid => {
        if (valid) {
          let data = {
            ...form
          };
          createOilCompany(data).then(() => {
            const infoMap = {
              "oil-goods-create": "添加油站成功",
              "oil-goods-modify": "修改油站成功"
            };
            Message.success(infoMap[rootState.route.name]);
            router.push({ name: "oil-goods-list" });
          });
        }
      });
    },
    "oil-goods-modify:save": function({ dispatch }) {
      dispatch("oil-goods-create:save");
    },
    "oil-goods-create:update-form": function({ state }, { form, formRef }) {
      state.create.form = form;
      state.create.formRef = formRef;
    },
    "oil-goods-detail:fetch-form": function({ commit, rootState, state }) {
      return fetchOilCompanyDetail(rootState.route.query.companyId).then(
        res => {
          commit("UPDATE_OIL_GOODS_DETAIL", res.data);
          return state.detail.form;
        }
      );
    },
    "oil-goods-detail:modify": function({ rootState }) {
      router.push({ name: "oil-goods-modify", query: rootState.route.query });
    }
  }
};

export default oilGoods;
