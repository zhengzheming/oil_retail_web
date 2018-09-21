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
    "oil-goods:after-hook": function({ rootState, dispatch }) {
      console.log(`hello world after-hook`);
      const infoMap = {
        "oil-goods-create": "添加油品成功",
        "oil-goods-modify": "修改油品成功"
      };
      const listPageState = rootState.listPage;
      const routeName = listPageState.slideRoute.name || rootState.route.name;
      console.log(infoMap[routeName], routeName);
      Message.success(infoMap[routeName]);
      if (listPageState.slideRoute.name) {
        dispatch("listPage:hide-side-content");
        dispatch("listPage:search");
      } else {
        router.push({ name: "oil-goods-list" });
      }
    },
    "oil-goods-list:create": function({ dispatch }, params) {
      if (params && params.isSlide) {
        // 列表侧拉
        dispatch("listPage:show-side-content", [true, "oil-goods-create"]);
      } else {
        // 列表跳转
        router.push({ name: "oil-goods-create" });
      }
    },
    "oil-goods-create:save": function({ state, dispatch }) {
      const formRef = state.create.formRef;
      const form = state.create.form;
      if (!formRef) return;
      formRef.validate(valid => {
        if (valid) {
          let data = {
            ...form
          };
          createOilGoods(data).then(() => {
            dispatch("oil-goods:after-hook");
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
