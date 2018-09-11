import request from "@/utils/request";

export function fetchUserRoleDetail(roleId) {
  return request({
    url: "/admin/role/detail",
    method: "get",
    params: {
      role_id: roleId
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

export function deleteRole(role_id) {
  return request({
    url: "/admin/role/del",
    method: "post",
    data: {
      role_id
    }
  });
}
