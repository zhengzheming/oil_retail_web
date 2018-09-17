import Vue from "vue";
import Vuex from "vuex";
import common from "./modules/common";
import app from "./modules/app";
import permission from "./modules/permission";
import user from "./modules/user";
import system from "./modules/system/index";
import basicInfo from "./modules/basicInfo";
import logisticsEnterprise from "./modules/basicInfo/logisticsEnterprise/index";
import logisticsManage from "./modules/logisticsManage/index";
import oilStationManage from "./modules/oilStationManage";
import resetPwd from "./modules/resetPwd";
import getters from "./getters";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    app,
    common,
    permission,
    user,
    system,
    logisticsEnterprise,
    logisticsManage,
    basicInfo,
    oilStationManage,
    resetPwd
  },
  getters
});
export default store;
