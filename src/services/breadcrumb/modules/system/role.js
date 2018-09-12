export default {
  "system-role-list": {
    items: ["系统管理", "角色管理", "列表"],
    actions: [{ name: "添加", action: "create", type: "primary" }],
    canback: false
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
  "system-role-auth": {
    items: ["系统管理", "角色管理", "角色授权"],
    actions: [{ name: "保存", action: "save", type: "primary" }]
  }
};
