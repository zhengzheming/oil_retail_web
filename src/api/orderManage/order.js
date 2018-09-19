import request from "@/utils/request";

export const fetchOrderDetail = order_id =>
  request({
    url: "/webAPI/order/detail",
    method: "get",
    params: {
      order_id
    }
  });
