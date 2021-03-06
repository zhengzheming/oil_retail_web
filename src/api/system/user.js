import request from "@/utils/request";
import md5 from "js-md5";

export function createSystemUser({
  username,
  realName,
  password,
  cpassword,
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
      password: password && md5(password),
      confirmPassword: cpassword && md5(cpassword),
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

export function deleteUser(userId) {
  return request({
    url: "/admin/user/del",
    method: "post",
    data: {
      user_id: userId
    }
  });
}
