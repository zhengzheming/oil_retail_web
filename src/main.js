import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index.js";
import _ from "lodash";

import Element from "element-ui";
import "@/styles/element-overide.scss";

import "./components";
import "./permission"; // permission control

Vue.config.productionTip = false;
Object.defineProperty(window, "_", { value: _ });
Object.defineProperty(Vue, "$lodash", { value: _ });

Vue.use(Element);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
