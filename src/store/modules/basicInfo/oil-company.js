import { createSystemRole } from "@/api/system/role";
import { systemRoleFieldMap } from "@/services/fieldMap";
import { fetchUserRoleDetail } from "@/api/system/role";
import { Message } from "element-ui";
import router from "@/router/index";
const oilCompany = {
  state: {
    systemRoleCreate: {
      form: {},
      formRef: null
    },
    systemRoleDetail: {
      form: {}
    }
  },
  mutations: {
    UPDATE_ROLE_DETAIL(state, detail) {
      state.systemRoleDetail.form = $utils.renameKeys(
        systemRoleFieldMap,
        detail
      );
    }
  },
  actions: {
    "system-role-list:create": function() {
      router.push({ name: "system-role-create" });
    },
    "system-role-create:save": function({ state, rootState }) {
      const formRef = state.systemRoleCreate.formRef;
      const form = state.systemRoleCreate.form;
      if (!formRef) return;
      formRef.validate(valid => {
        if (valid) {
          let data = {
            ...form
          };
          createSystemRole(data).then(() => {
            const infoMap = {
              "system-role-create": "添加角色成功",
              "system-role-modify": "修改角色成功"
            };
            Message.success(infoMap[rootState.route.name]);
            router.push({ name: "system-role-list" });
          });
        }
      });
    },
    "system-role-modify:save": function({ dispatch }) {
      dispatch("system-role-create:save");
    },
    "system-role-create:update-form": function({ state }, { form, formRef }) {
      state.systemRoleCreate.form = form;
      state.systemRoleCreate.formRef = formRef;
    },
    "system-role-detail:fetch-form": function({ commit, rootState, state }) {
      return fetchUserRoleDetail(rootState.route.query.roleId).then(res => {
        commit("UPDATE_ROLE_DETAIL", res.data);
        return state.systemRoleDetail.form;
      });
    },
    "system-role-detail:modify": function({ rootState }) {
      router.push({ name: "system-role-modify", query: rootState.route.query });
    },
    "system-role-auth:save": function({ dispatch }) {
      dispatch("module-auth:save");
    }
  }
};

export default oilCompany;
