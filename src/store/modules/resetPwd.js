import { Message } from "element-ui";
import router from "@/router/index";
import { resetPwd } from "@/api/login";
const user = {
  state: {
    form: {},
    formRef: null
  },
  actions: {
    "reset-pwd:submit": function({ state, dispatch }) {
      const formRef = state.formRef;
      const form = state.form;
      if (!formRef) return;
      formRef.validate(valid => {
        if (valid) {
          let data = {
            ...form
          };
          resetPwd(data).then(() => {
            Message.success("修改密码成功");
            dispatch("FedLogOut").then(() => {
              router.push({ name: "login" });
            });
          });
        }
      });
    },
    "reset-pwd:update-form": function({ state }, { form, formRef }) {
      state.form = form;
      state.formRef = formRef;
    }
  }
};

export default user;
