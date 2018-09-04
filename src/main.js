import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index.js";
import _ from "lodash";

import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;
Object.defineProperty(window, "_", { value: _ });
Object.defineProperty(Vue, "$lodash", { value: _ });

Vue.use(Element);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
