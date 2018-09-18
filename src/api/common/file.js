import request from "@/utils/request";
export const delFile = (url, id) =>
  request({
    url,
    method: "post",
    data: {
      id
    }
  });
