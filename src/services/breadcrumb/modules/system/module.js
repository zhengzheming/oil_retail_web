export default {
  systemModule: {
    items: ["系统管理", "模块管理", "列表"],
    actions: [{ name: "添加", action: "create", type: "primary" }],
    canback: false
  },
  moduleDetail: {
    items: ["系统管理", "模块管理", "详情"]
  },
  moduleEdit: {
    items: ["系统管理", "模块管理", "修改"],
    actions: [{ name: "保存", action: "save", type: "primary" }]
  },
  addModule: {
    items: ["系统管理", "模块管理", "添加"],
    actions: [{ name: "保存", action: "save", type: "primary" }]
  }
};
