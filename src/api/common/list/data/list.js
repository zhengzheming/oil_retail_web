import request from "@/utils/request";

export default {
  logistics: (page, pageSize, name, out_status, status) => {
    const data = {
      page: page,
      pageSiz: pageSize,
      search: {
        name: name,
        out_status: out_status,
        status: status
      }
    };
    return request({
      url: "/webAPI/LogisticsCompany/list",
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
  }
};
