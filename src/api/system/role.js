import request from "@/utils/request";

export function fetchUserRoleDetail(userId) {
  return request({
    url: "/admin/role/detail",
    method: "get",
    params: {
      user_id: userId
    }
  });
}

export function createSystemRole(data) {
  return request({
    url: "/admin/role/save",
    method: "post",
    data
  });
}
