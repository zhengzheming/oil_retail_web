import request from "@/utils/request";

export function saveModuleTree(data) {
  return request({
    url: "/admin/module/save",
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
