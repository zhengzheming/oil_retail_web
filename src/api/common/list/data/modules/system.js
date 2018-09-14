import request from "@/utils/request";

export default {
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
      pageSize: pageSize,
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
      pageSize: pageSize,
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
