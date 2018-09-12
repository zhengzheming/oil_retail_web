import request from "@/utils/request";

export function saveModuleTreeByUserId(data) {
  return request({
    url: "/admin/user/saveRight",
    method: "post",
    data
  });
}

export function saveModuleTreeByRoleId(data) {
  return request({
    url: "/admin/role/saveRight",
    method: "post",
    data
  });
}

export function fetchModuleTree() {
  return request({
    url: "/admin/module/index",
    method: "post"
  });
}

export function fetchAuthByUserId(userId) {
  return request({
    url: "/admin/user/userRight",
    method: "get",
    params: {
      user_id: userId
    }
  });
}

export function fetchAuthByRoleId(roleId) {
  return request({
    url: "/admin/role/roleRight",
    method: "get",
    params: {
      role_id: roleId
    }
  });
}
