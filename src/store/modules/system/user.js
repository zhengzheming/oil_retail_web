import { createSystemUser } from "@/api/system/user";
import { systemUserFieldMap } from "@/services/fieldMap";
import { fetchUserDetail } from "@/api/system/user";
import { Message } from "element-ui";
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
      const form = $utils.renameKeys(systemUserFieldMap, detail);
      state.systemUserDetail.form = {
        ...form,
        roles: form.roles.map(role => role.id),
        roleObjs: form.roles
      };
    }
  },
  actions: {
    "system-user-list:create": function() {
      router.push({ name: "system-user-create" });
    },
    "system-user-create:save": function({ state, rootState }) {
      const formRef = state.systemUserCreate.formRef;
      const form = state.systemUserCreate.form;
      if (!formRef) return;
      formRef.validate(valid => {
        if (valid) {
          let data = {
            ...form,
            roles: form.roles.map(role => ({ id: role, name: "" }))
          };
          createSystemUser(data).then(() => {
            const infoMap = {
              "system-user-create": "添加角色成功",
              "system-user-modify": "修改角色成功"
            };
            Message.success(infoMap[rootState.route.name]);
            router.push({ name: "system-user-list" });
          });
        }
      });
    },
    "system-user-modify:save": function({ dispatch }) {
      dispatch("system-user-create:save");
    },
    "system-user-create:update-form": function({ state }, { form, formRef }) {
      state.systemUserCreate.form = form;
      state.systemUserCreate.formRef = formRef;
    },
    "system-user-detail:fetch-form": function({ commit, rootState, state }) {
      return fetchUserDetail(rootState.route.query.userId).then(res => {
        commit("UPDATE_USER_DETAIL", res.data);
        return state.systemUserDetail.form;
      });
    },
    "system-user-detail:modify": function({ rootState }) {
      router.push({ name: "system-user-create", query: rootState.route.query });
    }
  }
};

export default user;
