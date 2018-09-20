import { deleteUser } from "@/api/system/user";
import { deleteRole } from "@/api/system/role";

export const queryList = {
  "oil-company-list": [
    {
      label: "企业名称",
      val: ""
    },
    {
      label: "企业状态",
      type: "slt",
      val: "",
      field: "oil_company_status",
      data: []
    }
  ],
  "oil-goods-list": [
    {
      label: "油品名称",
      val: ""
    }
  ],
  "oil-station-checked-list": [
    {
      label: "油站名称",
      val: ""
    },
    {
      label: "所属企业",
      type: "slt",
      val: "",
      field: "oil_company_id_name_map",
      data: []
    },
    {
      label: "油站状态",
      type: "slt",
      val: "",
      field: "oil_station_status",
      data: []
    },
    {
      label: "油站编号",
      val: ""
    }
  ]
};

export const tableHeader = {
  "oil-company-list": {
    company_id: {
      label: "编号",
      width: "70px"
    },
    name: {
      label: "企业名称"
    },
    tax_code: {
      label: "纳税人识别号"
    },
    short_name: {
      label: "企业简称"
    },
    status_name: {
      label: "企业状态",
      width: "140px"
    }
  },
  "oil-goods-list": {
    goods_id: {
      label: "编号",
      width: "70px"
    },
    name: {
      label: "油品名称"
    },
    status_name: {
      label: "状态",
      width: "70px"
    }
  },
  "oil-station-checked-list": {
    station_id: {
      label: "油站编号",
      width: "100px"
    },
    name: {
      label: "油站名称"
    },
    company_name: {
      label: "所属企业"
    },
    province: {
      label: "所属省份"
    },
    status_name: {
      label: "启用状态",
      width: "100px"
    }
  },
};

export const editPath = {
  "oil-company-list": {
    pathName: "oil-company-modify",
    query: [
      {
        name: "companyId",
        field: "company_id"
      }
    ]
  },
  "oil-goods-list": {
    pathName: "oil-goods-modify",
    query: [
      {
        name: "goodsId",
        field: "goods_id"
      }
    ]
  }
};

export const detailPath = {
  "oil-company-list": {
    pathName: "oil-company-detail",
    query: [
      {
        name: "companyId",
        field: "company_id"
      }
    ]
  },
  "oil-goods-list": {
    pathName: "oil-goods-detail",
    query: [
      {
        name: "goodsId",
        field: "goods_id"
      }
    ]
  },
  "oil-station-checked-list": {
    pathName: "oil-station-checked-detail",
    query: [
      {
        name: "stationId",
        field: "station_id"
      }
    ]
  }
};

export const deleteItem = {
  "oil-company-list": {
    callback: userId => deleteUser(userId),
    args: ["user_id"]
  },
  "oil-goods-list": {
    callback: roleId => deleteRole(roleId),
    args: ["role_id"]
  }
};
