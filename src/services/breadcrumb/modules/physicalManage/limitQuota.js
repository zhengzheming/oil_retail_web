export default {
  enterpriseDayQuota: {
    items: ["额度管理", "企业每日限额"],
    actions: [{ name: "新增额度", action: "add", type: "primary",params: { isSlide: true } }],
    canback: false
  },
  vehicleDayQuota: {
    items: ["额度管理", "车辆每日限额"],
    actions: [{ name: "新增额度", action: "add", type: "primary",params: { isSlide: true } }],
    canback: false
  },
  enterpriseDayQuotaAdd: {
    items: ["额度管理", "企业每日限额", "新增限额"],
    actions: [{ name: "保存", action: "save", type: "primary" }]
  },
  vehicleDayQuotaAdd: {
    items: ["额度管理", "车辆每日限额", "新增限额"],
    actions: [{ name: "保存", action: "save", type: "primary" }]
  }
};
