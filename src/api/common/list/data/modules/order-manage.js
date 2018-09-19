import request from "@/utils/request";

export default {
  "order-list": (
    page,
    pageSize,
    create_date,
    order_id,
    customer_name,
    logistics_name,
    station_name,
    vehicle_number,
    order_status
  ) => {
    const data = {
      page: page,
      pageSize: pageSize,
      search: {
        create_date,
        order_id,
        customer_name,
        logistics_name,
        station_name,
        vehicle_number,
        order_status
      }
    };
    return request({
      url: "/webAPI/order/list",
      method: "post",
      data
    });
  }
};
