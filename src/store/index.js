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
import breadcrumb from "./modules/breadcrumb";
import priceManage from "./modules/priceManage";
import getters from "./getters";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    app,
    breadcrumb,
    common,
    permission,
    user,
    system,
    logisticsEnterprise,
    logisticsManage,
    basicInfo,
    oilStationManage,
    priceManage,
    resetPwd
  },
  getters
});
export default store;
