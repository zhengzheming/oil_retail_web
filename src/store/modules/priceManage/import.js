import router from "@/router/index";
import { Message } from "element-ui";
import {
  createPriceImportApply,
  fetchPriceApply
} from "@/api/priceImport/priceApply";

const priceImport = {
  state: {
    create: {
      form: {},
      formRef: null
    },
    detail: {
      form: {}
    }
  },
  actions: {
    "price-import-list:create": function() {
      router.push({ name: "price-import-create" });
    },
    "price-import-create:submit": function({ state }) {
      const formRef = state.create.formRef;
      const form = state.create.form;
      if (!formRef) return;
      formRef.validate(valid => {
        if (valid) {
          let data = {
            fileId: form.files.length > 0 && form.files[0].id
          };
          console.log(data);
          createPriceImportApply(data).then(() => {
            Message.success("提交成功");
            // router.push({ name: "price-import-list" });
          });
        }
      });
    },
    "price-import-create:save": function({ state, rootState }) {
      const formRef = state.create.formRef;
      const form = state.create.form;
      if (!formRef) return;
      formRef.validate(valid => {
        if (valid) {
          let data = {
            ...form
          };
          createPriceImportApply(data, false).then(() => {
            const infoMap = {
              "price-import-create": "添加油站成功",
              "price-import-modify": "修改油站成功"
            };
            Message.success(infoMap[rootState.route.name]);
            router.push({ name: "price-import-list" });
          });
        }
      });
    },
    "price-import-modify:save": function({ dispatch }) {
      dispatch("price-import-create:save");
    },
    "price-import-modify:submit": function({ dispatch }) {
      dispatch("price-import-create:submit");
    },
    "price-import-create:update-form": function({ state }, { form, formRef }) {
      state.create.form = form;
      state.create.formRef = formRef;
    },
    "price-import-detail:fetch-form": function({ commit, rootState, state }) {
      return fetchPriceApply(rootState.route.query.applyId).then(res => {
        commit("UPDATE_OIL_STATION_DETAIL", res.data);
        return state.detail.form;
      });
    },
    "price-import-detail:modify": function({ rootState }) {
      router.push({
        name: "price-import-modify",
        query: rootState.route.query
      });
    }
  }
};

export default priceImport;
