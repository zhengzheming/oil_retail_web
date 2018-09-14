import { fetchRoles } from "@/api/system/user";
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
      getOptions: fetchRoles,
      transformer: data =>
        data.map(role => ({
          label: role.name,
          val: role.role_id
        })),
      data: []
    },
    {
      label: "审核状态",
      type: "slt",
      val: "",
      data: [
        {
          label: "全部",
          val: ""
        },
        {
          label: "待审核",
          val: "1"
        },
        {
          label: "审核通过",
          val: "2"
        },
        {
          label: "审核驳回",
          val: "4"
        }
      ]
    },
    {
      label: "油站编号",
      val: ""
    }
  ]
};

export const tableHeader = {
  "oil-station-list": {
    user_id: {
      label: "油站编号",
      width: "100px"
    },
    user_name: {
      label: "油站名称"
    },
    name: {
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
