import request from "@/utils/request";

export function fetchUserRoleDetail(roleId) {
  return request({
    url: "/admin/role/detail",
    method: "get",
    params: {
      user_id: roleId
    }
  });
}

export function createSystemRole({
  roleName: name,
  roleStatus: status,
  remark,
  roleId: role_id
}) {
  return request({
    url: "/admin/role/save",
    method: "post",
    data: {
      name,
      status,
      remark,
      role_id
    }
  });
}
