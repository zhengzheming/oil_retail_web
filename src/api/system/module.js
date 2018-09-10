import request from "@/utils/request";

export function list() {
    return request({
      url: "/admin/module/index",
      method: "post"
    });
}
export function detail(id) {
    return request({
      url: "/admin/module/detail",
      method: "post",
      data:{
          id
      }
    });
  }
