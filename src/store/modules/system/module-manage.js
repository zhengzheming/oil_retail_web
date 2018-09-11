import { save } from "@/api/system/module-manage";
import { systemRoleFieldMap } from "@/services/fieldMap";
import { fetchUserRoleDetail } from "@/api/system/role";
import { Message } from "element-ui";
import router from "@/router/index";
import { throwError } from "rxjs";
const role = {
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
    "moduleEdit:save": function({ state, rootState }) {
      const formRef = state.systemRoleCreate.formRef;
      const form = state.systemRoleCreate.form;
      if (!formRef) return;
      formRef.validate(valid => {
        if (valid) {
          let data = {
            ...form
          };
          save(data).then(() => {
            Message.success('保存成功');
            router.push({ name: "systemModule" });
          }).catch(err => {});
        }
      });
    },
    "moduleEdit:update-form": function({ state }, { form, formRef }) {
      state.systemRoleCreate.form = form;
      state.systemRoleCreate.formRef = formRef;
    },
    "moduleEdit:fetch-form": function({ commit, rootState, state }) {
      return fetchUserRoleDetail(rootState.route.query.roleId).then(res => {
        commit("UPDATE_ROLE_DETAIL", res.data);
        return state.systemRoleDetail.form;
      });
    }
  }
};

export default role;
