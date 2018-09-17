import request from "@/utils/request";

export const detail = (customer_id) => {
    const params = {
        customer_id
      };
    return request({
      url: "/webAPI/driver/detail",
      method: "get",
      params
    });
}