import request from "@/utils/request";

export function createSystemUser({
  username,
  realName,
  password,
  phone,
  mainRole,
  status,
  email,
  roles,
  authFollowRole,
  userId
}) {
  return request({
    url: "/admin/user/save",
    method: "post",
    data: {
      user_id: userId,
      user_name: username,
      password: password,
      name: realName,
      phone,
      email,
      main_role_id: mainRole,
      status,
      role_array: roles,
      is_right_role: authFollowRole
    }
  });
}

export function fetchUserDetail(userId) {
  return request({
    url: "/admin/user/detail",
    method: "get",
    params: {
      user_id: userId
    }
  });
}

export function fetchRoles() {
  return request({
    url: "/admin/user/getRoles",
    method: "get"
  });
}
