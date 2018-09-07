import { createSystemUser } from "@/api/system/user";
import fieldMap from "@/services/fieldMap";
import { fetchUserDetail } from "@/api/system/user";
import router from "@/router/index";
const user = {
  state: {
    systemUserCreate: {
      form: {},
      formRef: null
    },
    systemUserDetail: {
      form: {}
    }
  },
  mutations: {
    UPDATE_USER_DETAIL(state, detail) {
      state.systemUserDetail.form = $utils.renameKeys(fieldMap, detail);
    }
  },
  actions: {
    "system-user-create:save": function({ state }) {
      const formRef = state.systemUserCreate.formRef;
      const form = state.systemUserCreate.form;
      if (!formRef) return;
      formRef.validate(valid => {
        if (valid) {
          createSystemUser(form).then(() => {
            history.back();
          });
        }
      });
    },
    "system-user-create:update-form": function({ state }, { form, formRef }) {
      state.systemUserCreate.form = form;
      state.systemUserCreate.formRef = formRef;
    },
    "system-user-detail:fetch-form": function({ commit, rootState }) {
      fetchUserDetail(rootState.route.query.userId).then(res => {
        commit("UPDATE_USER_DETAIL", res.data);
      });
    },
    "system-user-detail:modify": function({ rootState }) {
      router.push({ name: "system-user-create", query: rootState.query });
    }
  }
};

export default user;
