import { createOilCompany } from "@/api/basicInfo/oilCompany";
import { oilCompanyFieldMap } from "@/services/fieldMap";
import { fetchOilCompanyDetail } from "@/api/basicInfo/oilCompany";
import { Message } from "element-ui";
import router from "@/router/index";
const oilCompany = {
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
    UPDATE_OIL_COMPANY_DETAIL(state, detail) {
      state.detail.form = $utils.renameKeys(oilCompanyFieldMap, detail);
      state.detail.form.ownership = String(state.detail.form.ownership);
      state.detail.form.status = String(state.detail.form.status);
    }
  },
  actions: {
    "oil-company-list:create": function() {
      router.push({ name: "oil-company-create" });
    },
    "oil-company-create:save": function({ state, rootState }) {
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
              "oil-company-create": "添加油企成功",
              "oil-company-modify": "修改油企成功"
            };
            Message.success(infoMap[rootState.route.name]);
            router.push({ name: "oil-company-list" });
          });
        }
      });
    },
    "oil-company-modify:save": function({ dispatch }) {
      dispatch("oil-company-create:save");
    },
    "oil-company-create:update-form": function({ state }, { form, formRef }) {
      state.create.form = form;
      state.create.formRef = formRef;
    },
    "oil-company-detail:fetch-form": function({ commit, rootState, state }) {
      return fetchOilCompanyDetail(rootState.route.query.companyId).then(
        res => {
          commit("UPDATE_OIL_COMPANY_DETAIL", res.data);
          return state.detail.form;
        }
      );
    },
    "oil-company-detail:modify": function({ rootState }) {
      router.push({ name: "oil-company-modify", query: rootState.route.query });
    }
  }
};

export default oilCompany;
