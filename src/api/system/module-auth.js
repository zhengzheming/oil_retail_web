import request from "@/utils/request";

export function fetchModuleTree(userId) {
  return request({
    url: "/admin/role/detail",
    method: "get",
    params: {
      user_id: userId
    }
  });
}

export function saveModuleTree(data) {
  return request({
    url: "/admin/role/save",
    method: "post",
    data
  });
}
