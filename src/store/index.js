import Vue from "vue";
import Vuex from "vuex";
import app from "./modules/app";
import permission from "./modules/permission";
import user from "./modules/user";
import system from "./modules/system/index";
import logisticsEnterprise from "./modules/basicInfo/logisticsEnterprise/index";
import logisticsManage from "./modules/logisticsManage/index";
import getters from "./getters";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    app,
    permission,
    user,
    system,
    logisticsEnterprise,
    logisticsManage
  },
  getters
});
export default store;
