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
      data: [
        {
          label: "全部",
          val: ""
        },
        {
          label: "启用",
          val: "1"
        },
        {
          label: "未启用",
          val: "0"
        }
      ]
    }
  ],
  "oil-goods-list": [
    {
      label: "油品名称",
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
  }
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
