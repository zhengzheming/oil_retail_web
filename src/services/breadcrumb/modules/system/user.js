export default {
  "system-user-list": {
    items: ["系统管理", "系统用户", "列表"],
    actions: [{ name: "添加", action: "create", type: "primary" }],
    canback: false
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
  "system-user-auth": {
    items: ["系统管理", "系统用户", "用户授权"],
    actions: [{ name: "保存", action: "save", type: "primary" }]
  }
};
