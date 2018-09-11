import { deleteUser } from "@/api/system/user";
import { deleteRole } from "@/api/system/role";
export const queryList = {
  "system-user-list": [
    {
      label: "用户名",
      val: ""
    },
    {
      label: "姓名",
      val: ""
    },
    {
      label: "主角色",
      type: "slt",
      val: "",
      data: []
    },
    {
      label: "角色",
      type: "slt",
      val: "",
      data: []
    }
  ],
  "system-role-list": [
    {
      label: "角色名",
      val: ""
    }
  ]
};

export const tableHeader = {
  "system-user-list": {
    user_id: {
      label: "编号",
      width: "70px"
    },
    user_name: {
      label: "用户名"
    },
    name: {
      label: "姓名"
    },
    role_name: {
      label: "主角色"
    },
    statusName: {
      label: "状态",
      mapKey: "status"
    },
    login_time: {
      label: "最后登录时间"
    }
  },
  "system-role-list": {
    role_id: {
      label: "编号",
      width: "70px"
    },
    name: {
      label: "角色名"
    },
    statusName: {
      label: "状态",
      mapKey: "status"
    },
    update_time: {
      label: "更新时间"
    }
  }
};

export const editPath = {
  "system-user-list": {
    pathName: "system-user-create",
    query: [
      {
        name: "userId",
        field: "user_id"
      }
    ]
  },
  "system-role-list": {
    pathName: "system-role-create",
    query: [
      {
        name: "roleId",
        field: "role_id"
      }
    ]
  }
};

export const detailPath = {
  "system-user-list": {
    pathName: "system-user-detail",
    query: [
      {
        name: "userId",
        field: "user_id"
      }
    ]
  },
  "system-role-list": {
    pathName: "system-role-detail",
    query: [
      {
        name: "roleId",
        field: "role_id"
      }
    ]
  }
};

export const deleteItem = {
  "system-user-list": {
    callback: userId => deleteUser(userId),
    args: ["user_id"]
  },
  "system-role-list": {
    callback: roleId => deleteRole(roleId),
    args: ["role_id"]
  }
};
