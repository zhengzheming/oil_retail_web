export const queryList = {
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
      field: "logistics_company_status",
      data: []
    },
    {
      type: "slt",
      label: "银管家状态",
      val: "",
      field: "logistics_company_out_status",
      data: []
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
      field: "driver_status",
      data: []
    },
    {
      label: "所属企业",
      val: ""
    }
  ]
};

export const tableHeader = {
  //物流企业管理-司机信息
  driver: {
    driver_id: {
      label: "编号",
      width: "100"
    },
    name: {
      label: "姓名",
      width: "150"
    },
    logistics_name: {
      label: "所属企业",
      pathName: "logisticsDetail",
      query: [
        {
          name: "logistics_id", //参数key
          field: "logistics_id" //参数value所对应的后台字段
        }
      ]
    },
    phone: {
      label: "电话",
      width: "250"
    },
    status_name: {
      label: "状态",
      width: "150"
    }
  },
  // 基础数据-物流企业
  logistics: {
    logistics_id: {
      label: "编号",
      width: "100"
    },
    name: {
      label: "企业名称",
      minWidth: "200"
    },
    out_status_name: {
      label: "银管家状态"
    },
    status_name: {
      label: "企业状态"
    }
  },
  // 基础数据-车辆数据
  vehicleData: {
    vehicle_id: {
      label: "编号",
      width: "100"
    },
    number: {
      label: "车牌号",
      width: "250"
    },
    logistics_name: {
      label: "物流企业",
      pathName: "logisticsDetail",
      query: [
        {
          name: "logistics_id", //参数key
          field: "logistics_id" //参数value所对应的后台字段
        }
      ]
    },
    model: {
      label: "车辆类型",
      width: "250"
    },
    capacity: {
      label: "油箱容量/L",
      width: "150"
    }
  }
};

export const editPath = {
  logistics: {
    pathName: "logisticsEdit",
    isSlide: true,
    query: [
      {
        name: "logistics_id", //参数key
        field: "logistics_id" //参数value所对应的后台字段
      }
    ]
  }
};

export const detailPath = {
  // 基础数据-物流企业
  logistics: {
    pathName: "logisticsDetail",
    isSlide: true,
    query: [
      {
        name: "logistics_id", //参数key
        field: "logistics_id" //参数value所对应的后台字段
      }
    ]
  },
  // 基础数据-车辆数据
  vehicleData: {
    pathName: "vehicleDataDetail",
    isSlide: true,
    query: [
      {
        name: "vehicle_id",
        field: "vehicle_id"
      }
    ]
  },
  // 物流企业管理-司机信息
  driver: {
    pathName: "driverDetail",
    isSlide: true,
    query: [
      {
        name: "customer_id",
        field: "customer_id"
      }
    ]
  }
};

export const deleteItem = {};
