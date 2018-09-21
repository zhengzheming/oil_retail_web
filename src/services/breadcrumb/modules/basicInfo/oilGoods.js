export default {
  "oil-goods-list": {
    items: ["基础数据", "油品数据", "列表"],
    actions: [
      {
        name: "添加",
        action: "create",
        type: "primary",
        params: { isSlide: true }
      }
    ],
    canback: false
  },
  "oil-goods-create": {
    items: ["基础数据", "油品数据", "新增油品"],
    actions: [{ name: "保存", action: "save", type: "primary" }]
  },
  "oil-goods-modify": {
    items: ["基础数据", "油品数据", "修改油品"],
    actions: [{ name: "保存", action: "save", type: "primary" }]
  },
  "oil-goods-detail": {
    items: ["基础数据", "油品数据", "油品详情"],
    actions: [{ name: "修改", action: "modify", plain: true }]
  }
};
