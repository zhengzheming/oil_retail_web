import { createOilGoods } from "@/api/basicInfo/oilGoods";
import { oilGoodsFieldMap } from "@/services/fieldMap";
import { fetchOilGoodsDetail } from "@/api/basicInfo/oilGoods";
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
      state.detail.form = $utils.renameKeys(oilGoodsFieldMap, detail);
      state.detail.form.status = String(state.detail.form.status);
    }
  },
  actions: {
    "oil-goods-list:create": function({ dispatch }) {
      // 列表跳转
      // router.push({ name: "oil-goods-create" });
      // 列表侧拉
      dispatch("showComponent", "oil-goods-create");
      dispatch("showSideContent", true);
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
          createOilGoods(data).then(() => {
            const infoMap = {
              "oil-goods-create": "添加油品成功",
              "oil-goods-modify": "修改油品成功"
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
    "oil-goods-detail:fetch-form": function({ commit, state }, goodsId) {
      return fetchOilGoodsDetail(goodsId).then(res => {
        commit("UPDATE_OIL_GOODS_DETAIL", res.data);
        return state.detail.form;
      });
    },
    "oil-goods-detail:modify": function({ rootState }) {
      router.push({ name: "oil-goods-modify", query: rootState.route.query });
    }
  }
};

export default oilGoods;
