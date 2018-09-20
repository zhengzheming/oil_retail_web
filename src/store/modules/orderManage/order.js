import { fetchOrderDetail } from "@/api/orderManage/order";
import { orderFieldMap } from "@/services/fieldMap";

const order = {
  state: {
    detail: {
      form: {}
    }
  },
  mutations: {
    UPDATE_ORDER_DETAIL(state, detail) {
      state.detail.form = $utils.renameKeys(orderFieldMap, detail);
      state.detail.form.status = String(state.detail.form.status);
    }
  },
  actions: {
    "order-detail:fetch-form": function({ commit, state }, orderId) {
      return fetchOrderDetail(orderId).then(res => {
        commit("UPDATE_ORDER_DETAIL", res.data);
        return state.detail.form;
      });
    }
  }
};
export default order;
