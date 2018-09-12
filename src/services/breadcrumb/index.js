import systemUser from "./modules/system/user";
import systemRole from "./modules/system/role";
export default {
  ...systemUser,
  ...systemRole,
  moduleEdit: {
    items: ["系统管理", "模块管理", "修改"],
    actions: [{ name: "保存", action: "save", type: "primary" }]
  },
  addModule: {
    items: ["系统管理", "模块管理", "添加"],
    actions: [{ name: "保存", action: "save", type: "primary" }]
  },
  logistics: {
    items: ["基础数据", "物流企业"]
  },
  logisticsDetail: {
    items: ["基础数据", "物流企业", "物流企业详情"]
  },
  logisticsEdit: {
    items: ["基础数据", "物流企业", "修改企业信息"],
    actions: [{ name: "保存", action: "save", type: "primary" }]
  }
};
