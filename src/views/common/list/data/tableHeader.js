import { tableHeader as system } from "./modules/system";
export default {
  // 基础数据-物流企业
  logistics: {
    logistics_id: {
      label: "编号",
      width: "120"
    },
    name: {
      label: "企业名称",
      url: "11111",
      pathName: "enterprise-quota"
      // query:[{
      //   name:'id',             //参数key
      //   field:'out_status'     //参数value所对应的后台字段
      // }]
    },
    out_status_name: {
      label: "银管家状态",
      width: "120"
    },
    status_name: {
      label: "企业状态",
      width: "120"
    }
  },
  // 基础数据-物流企业管理-企业额度
  "enterprise-quota": {
    logistics_id: {
      label: "物流公司",
      width: "120"
    },
    name: {
      label: "额度状态",
      width: "200"
    },
    out_status_name: {
      label: "企业额度",
      width: "120"
    },
    status_name: {
      label: "企业可用额度"
    }
  },
  // 基础数据-物流企业管理-企业可用额度收支管理
  "available-credit": {
    logistics_id: {
      label: "时间",
      width: "120"
    },
    name: {
      label: "额度明细/元",
      width: "200"
    },
    out_status_name: {
      label: "编号",
      width: "120"
    },
    status_name: {
      label: "收支类型"
    }
  },
  // 基础数据-物流企业管理-企业当日可用额度收支管理
  "day-credit": {
    logistics_id: {
      label: "时间",
      width: "120"
    },
    name: {
      label: "额度明细/元",
      width: "200"
    },
    out_status_name: {
      label: "编号",
      width: "120"
    },
    status_name: {
      label: "收支类型"
    }
  },
  // 物流企业管理-车辆数据
  "vehicle-data": {
    vehicle_id: {
      label: "编号",
      width: "120"
    },
    number: {
      label: "车牌号",
      width: "200"
    },
    logistics_name: {
      label: "物流企业",
      width: "120"
    },
    model: {
      label: "车辆类型"
    },
    capacity: {
      label: "油箱容量/L"
    }
  },
  ...system
};
