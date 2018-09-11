import request from "@/utils/request";

export default {
  logistics: (page, pageSize, name, out_status, status) => {
    const data = {
      page: page,
      pageSiz: pageSize,
      search: {
        name,
        out_status,
        status
      }
    };
    return request({
      url: "/webAPI/LogisticsCompany/list",
      method: "post",
      data
    });
  },
  //车辆数据
  "vehicle-data": (page, pageSize, logistics_name, number) => {
    const data = {
      page: page,
      pageSiz: pageSize,
      search: {
        logistics_name,
        number
      }
    };
    return request({
      url: "/webAPI/Vehicle/list",
      method: "post",
      data
    });
  },
  "system-user-list": (
    page,
    pageSize,
    user_name,
    name,
    main_role_id,
    role_id
  ) => {
    const data = {
      page: page,
      pageSiz: pageSize,
      search: {
        user_name,
        name,
        main_role_id,
        role_id
      }
    };
    return request({
      url: "/admin/user/list",
      method: "post",
      data
    });
  },
  "system-role-list": (page, pageSize, name) => {
    const data = {
      page: page,
      pageSiz: pageSize,
      search: {
        name
      }
    };
    return request({
      url: "/admin/role/list",
      method: "post",
      data
    });
  }
};
