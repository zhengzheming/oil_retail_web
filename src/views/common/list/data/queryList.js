import { queryList as system } from "./modules/system";
import { queryList as basicInfo } from "./modules/basicInfo";
import { queryList as oilStationManage } from "./modules/oil-station-manage";
export default {
  // 基础数据-物流企业
  logistics: [
    {
      label: "企业名称",
      val: ""
    },
    {
      type: "slt",
      label: "企业状态",
      val: "",
      field: 'logistics_company_status',
      data:[]
    },
    {
      type: "slt",
      label: "银管家状态",
      val: "",
      field: 'logistics_company_out_status',
      data:[]
    }
  ],
  //车辆数据
  vehicleData: [
    {
      label: "物流企业",
      val: ""
    },
    {
      label: "车牌号",
      val: ""
    }
  ],
  // 物流企业管理-司机信息
  driver: [
    {
      label: "姓名",
      val: ""
    },
    {
      type: "slt",
      label: "状态",
      val: "",
      field: 'driver_status',
      data:[]
    },
    {
      label: "所属企业",
      val: ""
    }
  ],
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
      type: "date",
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
      type: "date",
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
      field: 'logistics_quota_status',
      data:[]
    }
  ],
  // 物流企业管理-企业可用额度收支管理
  availableCredit: [
    {
      type: "slt",
      label: "收支类型",
      val: "",
      field: 'logistics_quota_log_category',
      data:[]
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
  // 物流企业管理-车辆容量
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
  ...system,
  ...basicInfo,
  ...oilStationManage
};
