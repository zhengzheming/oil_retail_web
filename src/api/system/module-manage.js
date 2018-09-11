import request from "@/utils/request";

export function list() {
  return request({
    url: "/admin/module/index",
    method: "post"
  });
}
export function detail(id) {
  const params = {
    id
  };
  return request({
    url: "/admin/module/detail",
    method: "get",
    params
  });
}
export function save(data) {
  return request({
    url: "/admin/module/save",
    method: "post",
    data
  });
}
