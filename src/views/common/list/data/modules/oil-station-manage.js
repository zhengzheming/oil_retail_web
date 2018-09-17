export const queryList = {
  "oil-station-list": [
    {
      label: "油站名称",
      val: ""
    },
    {
      label: "所属企业",
      type: "slt",
      val: "",
      data: [],
      field: "oil_company_id_name_map"
    },
    {
      label: "审核状态",
      type: "slt",
      val: "",
      field: "oil_station_apply_status",
      data: []
    },
    {
      label: "油站编号",
      val: ""
    }
  ]
};

export const tableHeader = {
  "oil-station-list": {
    apply_id: {
      label: "油站编号",
      width: "100px"
    },
    name: {
      label: "油站名称"
    },
    company_name: {
      label: "所属企业"
    },
    status_name: {
      label: "审核状态",
      width: "100px"
    }
  }
};

export const editPath = {
  "oil-station-list": {
    pathName: "oil-station-modify",
    query: [
      {
        name: "applyId",
        field: "apply_id"
      }
    ]
  }
};

export const detailPath = {
  "oil-station-list": {
    pathName: "oil-station-detail",
    query: [
      {
        name: "applyId",
        field: "apply_id"
      }
    ]
  }
};
