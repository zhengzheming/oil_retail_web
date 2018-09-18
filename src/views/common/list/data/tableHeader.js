import { tableHeader as system } from "./modules/system";
import { tableHeader as basicInfo } from "./modules/basicInfo";
import { tableHeader as oilStationManage } from "./modules/oil-station-manage";
export default {
  // 基础数据-物流企业
  logistics: {
    logistics_id: {
      label: "编号",
      width: "120"
    },
    name: {
      label: "企业名称",
      pathName: "enterpriseQuota"
      //query:[{
      //  name:'logistics_id',             //参数key
      //  field:'logistics_id'     //参数value所对应的后台字段
      //}]
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
  // 基础数据-车辆数据
  vehicleData: {
    vehicle_id: {
      label: "编号",
      width: "150"
    },
    number: {
      label: "车牌号",
      width: "150"
    },
    logistics_name: {
      label: "物流企业",
      width: "150"
    },
    model: {
      label: "车辆类型",
      width: "150"
    },
    capacity: {
      label: "油箱容量/L"
    }
  },
  //物流企业管理-司机信息
  driver: {
    driver_id: {
      label: "编号",
      width: "120"
    },
    name: {
      label: "姓名",
      width: "200"
    },
    logistics_name: {
      label: "所属企业",
      width: "200"
    },
    // numb4er: {         //不要了,删了
    //   label: "所属系统"
    // },
    phone: {
      label: "电话",
      width: "200"
    },
    status_name: {
      label: "状态",
      width: "200"
    }
  },
    // 物流企业管理-企业额度-企业可用额度收支管理
    availableCredit: {
        create_time: {
            label: "时间"
        },
        quota: {
            label: "额度明细/元"
        },
        relation_id: {
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
        relation_id: {
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
      label: "当日额度占比"
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
      label: "当日油箱占比"
    }
  },
  // 物流企业管理-企业额度
  enterpriseQuota: {
      logistics_name: {
          label: "物流公司",
          width: "150"
      },
      status_name: {
          label: "额度状态",
          width: "100"
      },
      credit_quota: {
          label: "企业额度",
      },
      available_quota: {
          label: "企业可用额度",
          pathName: "availableCredit",
          query: [
              {
                  name: "logistics_id",
                  field: "logistics_id"
              }
          ]
      },
      rate: {
          label: "每日额度占比"
      },
      daily_credit_quota: {
          label: "今日可用额度"
      },
      daily_available_quota: {
          label: "今日可用额度",
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
          width: "120"
      },
      end_date: {
          label: "结束时间",
          width: "120"
      }
  },
  //车辆容量
  vehicleCapacity: {
    logistics_id: {
      label: "编号",
      width: "120"
    },
    name: {
      label: "车牌号",
      width: "200"
    },
    out_status_name: {
      label: "油箱容量/L",
      width: "120"
    },
    status_name: {
      label: "每日额度占比"
    }
  },
  ...system,
  ...basicInfo,
  ...oilStationManage
};
