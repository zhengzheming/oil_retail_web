import { save } from "@/api/basicInfo/logisticsEnterprise/edit";
import router from "@/router/index";
const role = {
  state: {
  },
  mutations: {
  },
  actions: {
    "logisticsEdit:save": function({ state }) {
      console.log(state)
      const formRef = state.systemRoleCreate.formRef;
      const form = state.systemRoleCreate.form;
      if (!formRef) return;
      formRef.validate(valid => {
        if (valid) {
          let data = {
            ...form,
            roles: form.roles.map(role => ({ id: role, name: "" }))
          };
          createSystemRole(data).then(() => {
            router.push({ name: "system-role-list" });
          });
        }
      });
    }
  }
};

export default role;
