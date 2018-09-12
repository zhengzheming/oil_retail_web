import { save } from "@/api/system/module-manage";
import { Message } from "element-ui";
import router from "@/router/index";
const role = {
  state: {
    form: {},
    formRef: null
  },
  actions: {
    "moduleEdit:save": function({ state, rootState }) {
      const formRef = state.formRef;
      const form = state.form;
      if (!formRef) return;
      formRef.validate(valid => {
        if (valid) {
          let data = {
            ...form
          };
          save(data)
            .then(() => {
              Message.success("保存成功");
              router.push({ name: "systemModule" });
            })
            .catch(err => {});
        }
      });
    },
    'addModule:save': function({ dispatch }) {
      dispatch('moduleEdit:save');
    },
    "moduleEdit:update-form": function({ state }, { form, formRef }) {
      state.form = form;
      state.formRef = formRef;
    },
    'addModule:update-form': function({ state }, { form, formRef }) {
      state.form = form;
      state.formRef = formRef;
    }
  }
};

export default role;
