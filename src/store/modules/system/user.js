import { createSystemUser } from "@/api/system/user";

const user = {
  state: {
    systemUserCreate: {
      form: {},
      formRef: null
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
    "systemUserCreate:update-form": function({ state }, { form, formRef }) {
      state.systemUserCreate.form = form;
      state.systemUserCreate.formRef = formRef;
    }
  }
};

export default user;
