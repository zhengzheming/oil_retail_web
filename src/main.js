import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index.js";
import { sync } from "vuex-router-sync";
import _ from "lodash";
import request from "@/utils/request";

import Element from "element-ui";
import "@/styles/element-overide.scss";

import "./components";
import "./permission"; // permission control
import customConfig from "@/services/customConfig";
import * as $utils from "@/utils/helper";
import { lookupInDict } from "@/services/filter";
import verify from "@/services/verify";

Vue.config.productionTip = false;
Object.defineProperty(window, "_", { value: _ });
Object.defineProperty(Vue, "$lodash", { value: _ });
Object.defineProperty(Vue.prototype, "$log", { value: console.log });
Object.defineProperty(Vue.prototype, "$customConfig", { value: customConfig });
Object.defineProperty(window, "$utils", { value: $utils });
Object.defineProperty(Vue.prototype, "$lookupInDict", { value: lookupInDict });
Object.defineProperty(window, "$verify", { value: verify });

sync(store, router);

Vue.use(Element);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
