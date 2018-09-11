export default {
  logistics: {
    pathName: "logisticsDetail"
  },
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
