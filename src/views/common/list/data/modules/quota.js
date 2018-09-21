import { toPercent } from "@/filters";
export const queryList = {
  // 企业每日限额
  enterpriseDayQuota: [
    {
      type: "date",
      label: "开始时间",
      val: ""
    },
    {
      type: "date",
      label: "结束时间",
      val: ""
    },
    {
      label: "企业限额编号",
      val: ""
    }
  ],
  // 车辆每日限额
  vehicleDayQuota: [
    {
      type: "date",
      label: "开始时间",
      val: ""
    },
    {
      type: "date",
      label: "结束时间",
      val: ""
    },
    {
      label: "车辆限额编号",
      val: ""
    }
  ],
  // 物流企业管理-企业额度
  enterpriseQuota: [
    {
      label: "物流公司",
      val: ""
    },
    {
      type: "slt",
      label: "额度状态",
      val: "",
      field: "logistics_quota_status",
      data: []
    }
  ],
  // 物流企业管理-企业可用额度收支管理
  availableCredit: [
    {
      type: "slt",
      label: "收支类型",
      val: "",
      field: "logistics_quota_log_category",
      data: []
    },
    {
      type: "date",
      label: "开始时间",
      val: ""
    },
    {
      type: "date",
      label: "结束时间",
      val: ""
    },
    {
      label: "logistics_id",
      val: "",
      hide: true
    }
  ],
  dayCredit: [
    {
      label: "logistics_id",
      val: "",
      hide: true
    }
  ],
  // 额度管理-车辆容量
  vehicleCapacity: [
    {
      label: "物流企业",
      val: ""
    },
    {
      label: "车牌号",
      val: ""
    }
  ],
  // 额度管理-车辆容量详情
  vehicleCapacityDetail: [
    {
      type: "date",
      label: "开始时间",
      val: ""
    },
    {
      type: "date",
      label: "结束时间",
      val: ""
    },
    {
      label: "vehicle_id",
      val: "",
      hide: true
    }
  ]
};

export const tableHeader = {
  // 物流企业管理-企业额度-企业可用额度收支管理
  availableCredit: {
    create_time: {
      label: "时间"
    },
    quota: {
      label: "额度明细/元"
    },
    order_code: {
      label: "编号"
    },
    category_name: {
      label: "收支类型"
    }
  },
  // 物流企业管理-企业额度-企业当日可用额度收支管理
  dayCredit: {
    create_time: {
      label: "时间"
    },
    quota: {
      label: "额度明细/元"
    },
    order_code: {
      label: "编号"
    },
    category_name: {
      label: "收支类型"
    }
  },
  // 企业每日限额
  enterpriseDayQuota: {
    code: {
      label: "企业限额编号"
    },
    create_user_name: {
      label: "创建人"
    },
    create_time: {
      label: "变更时间"
    },
    rate: {
      label: "当日额度占比%",
      filter: toPercent
    }
  },
  //车辆每日限额
  vehicleDayQuota: {
    code: {
      label: "车辆限额编号"
    },
    create_user_name: {
      label: "创建人"
    },
    create_time: {
      label: "变更时间"
    },
    rate: {
      label: "当日油箱占比%",
      filter: toPercent
    }
  },
  // 物流企业管理-企业额度
  enterpriseQuota: {
    logistics_name: {
      label: "物流企业",
      width: "160",
      pathName: "logisticsDetail",
      query: [
        {
          name: "logistics_id", //参数key
          field: "logistics_id" //参数value所对应的后台字段
        }
      ]
    },
    status_name: {
      label: "额度状态",
      width: "120"
    },
    credit_quota: {
      label: "企业额度",
      width: "160"
    },
    available_quota: {
      label: "企业可用额度",
      minWidth: "160",
      pathName: "availableCredit",
      query: [
        {
          name: "logistics_id",
          field: "logistics_id"
        }
      ]
    },
    rate: {
      label: "每日额度占比%",
      minWidth: "160",
      filter: toPercent
    },
    daily_credit_quota: {
      label: "每日企业额度",
      minWidth: "160"
    },
    daily_available_quota: {
      label: "今日可用额度",
      minWidth: "160",
      pathName: "dayCredit",
      query: [
        {
          name: "logistics_id",
          field: "logistics_id"
        }
      ]
    },
    start_date: {
      label: "开始时间",
      width: "140"
    },
    end_date: {
      label: "结束时间",
      width: "140"
    }
  },
  //车辆容量
  vehicleCapacity: {
    vehicle_id: {
      label: "编号"
    },
    number: {
      label: "车牌号"
    },
    capacity: {
      label: "油箱容量/L"
    },
    rate: {
      label: "每日额度占比%",
      filter: toPercent
    },
    daily_capacity: {
      label: "每日车辆容量/L"
    },
    daily_available_capacity: {
      label: "当日车辆可用容量/L",
      pathName: "vehicleCapacityDetail",
      query: [
        {
          name: "vehicle_id",
          field: "vehicle_id"
        }
      ]
    },
    logistics_name: {
      label: "物流企业"
    }
  },
  //车辆容量详情
  vehicleCapacityDetail: {
    create_time: {
      label: "时间"
    },
    quota: {
      label: "容量明细/L"
    },
    order_code: {
      label: "订单编号"
    }
  }
};

export const editPath = {};

export const detailPath = {};

export const deleteItem = {};
