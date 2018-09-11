export default {
  "system-user-list": {
    items: ["系统管理", "系统用户", "列表"],
    actions: [{ name: "添加", action: "create", type: "primary" }]
  },
  "system-user-create": {
    items: ["系统管理", "系统用户", "添加用户"],
    actions: [{ name: "保存", action: "save", type: "primary" }]
  },
  "system-user-modify": {
    items: ["系统管理", "系统用户", "修改用户"],
    actions: [{ name: "保存", action: "save", type: "primary" }]
  },
  "system-user-detail": {
    items: ["系统管理", "系统用户", "用户详情"],
    actions: [{ name: "修改", action: "modify", plain: true }]
  },
  "system-role-list": {
    items: ["系统管理", "角色管理", "列表"],
    actions: [{ name: "添加", action: "create", type: "primary" }]
  },
  "system-role-create": {
    items: ["系统管理", "角色管理", "添加角色"],
    actions: [{ name: "保存", action: "save", type: "primary" }]
  },
  "system-role-modify": {
    items: ["系统管理", "角色管理", "修改角色"],
    actions: [{ name: "保存", action: "save", type: "primary" }]
  },
  "system-role-detail": {
    items: ["系统管理", "角色管理", "角色详情"],
    actions: [{ name: "修改", action: "modify", plain: true }]
  },
  moduleEdit: {
    items: ["系统管理", "模块管理", "修改"],
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
