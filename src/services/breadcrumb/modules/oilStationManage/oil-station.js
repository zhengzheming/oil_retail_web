export default {
  "oil-station-list": {
    items: ["油站管理", "油站准入", "油站申请", "列表"],
    actions: [{ name: "新增油站", action: "create", type: "primary" }],
    canback: false
  },
  "oil-station-create": {
    items: ["油站管理", "油站准入", "油站申请", "添加油站"],
    actions: [{ name: "提交", action: "submit", type: "primary" }]
  },
  "oil-station-modify": {
    items: ["油站管理", "油站准入", "油站申请", "修改油站"],
    actions: [
      { name: "保存", action: "save", type: "primary" },
      { name: "提交", action: "submit", type: "primary" }
    ]
  },
  "oil-station-detail": {
    items: ["油站管理", "油站准入", "油站申请", "油站详情"],
    actions: [{ name: "修改", action: "modify", plain: true }]
  }
};
