export default {
  "oil-company-list": {
    items: ["基础数据", "油企数据", "列表"],
    actions: [{ name: "新增油企", action: "create", type: "primary" }],
    canback: false
  },
  "oil-company-create": {
    items: ["基础数据", "油企数据", "新增油企"],
    actions: [{ name: "保存", action: "save", type: "primary" }]
  },
  "oil-company-modify": {
    items: ["基础数据", "油企数据", "修改油企"],
    actions: [{ name: "保存", action: "save", type: "primary" }]
  },
  "oil-company-detail": {
    items: ["基础数据", "油企数据", "油企详情"],
    actions: [{ name: "修改", action: "modify", plain: true }]
  }
};
