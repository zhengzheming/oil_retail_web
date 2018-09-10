export default {
  logistics: {
    pathName: "logisticsEdit"
    // query:[{
    //   name:'id',             //参数key
    //   field:'out_status'     //参数value所对应的后台字段
    // }]
  },
  "system-user-list": {
    pathName: "system-user-create",
    query: [
      {
        name: "userId",
        field: "user_id"
      }
    ]
  }
};
