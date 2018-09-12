import { queryList as system } from "./modules/system";
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
      data: [
        {
          label: "aaa",
          val: "1"
        },
        {
          label: "bbb",
          val: "2"
        },
        {
          label: "ccc",
          val: "3"
        }
      ]
    },
    {
      type: "slt",
      label: "银管家状态",
      val: "",
      data: [
        {
          label: "aaa",
          val: "1"
        },
        {
          label: "bbb",
          val: "2"
        },
        {
          label: "ccc",
          val: "3"
        }
      ]
    }
  ],
  //车辆数据
  "vehicleData": [
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
      data: [
        {
          label: "aaa",
          val: "1"
        },
        {
          label: "bbb",
          val: "2"
        },
        {
          label: "ccc",
          val: "3"
        }
      ]
    },
    {
      label: "所属企业",
      val: ""
    }
  ],
  // 物流企业管理-企业额度
  "enterpriseQuota": [
    {
      label: "物流公司",
      val: ""
    },
    {
      type: "slt",
      label: "额度状态",
      val: "",
      data: [
        {
          label: "aaa",
          val: "1"
        },
        {
          label: "bbb",
          val: "2"
        },
        {
          label: "ccc",
          val: "3"
        }
      ]
    }
  ],
  // 物流企业管理-企业可用额度收支管理
  "availableCredit": [
    {
      type: "slt",
      label: "收支类型",
      val: "",
      data: [
        {
          label: "aaa",
          val: "1"
        },
        {
          label: "bbb",
          val: "2"
        },
        {
          label: "ccc",
          val: "3"
        }
      ]
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
      val:'',
      hide:true
    }
  ],
  "dayCredit":[
    {
      label: "logistics_id",
      val:'',
      hide:true
    }
  ],
  // 物流企业管理-车辆容量
  "vehicleCapacity": [
    {
      label: "物流企业",
      val: ""
    },
    {
      label: "车牌号",
      val: ""
    }
  ],
  ...system
};
