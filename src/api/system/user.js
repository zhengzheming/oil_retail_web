import request from "@/utils/request";

export function createSystemUser(form) {
  return request({
    url: "/admin/user/create",
    method: "post",
    data: form
  });
}
