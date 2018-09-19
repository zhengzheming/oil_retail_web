import request from "@/utils/request";

export default {
  "order-list": (
    page,
    pageSize,
    create_start_date,
    create_end_date,
    order_id,
    vehicle_number,
    customer_name,
    customer_phone,
    logistics_name,
    status
  ) => {
    const data = {
      page: page,
      pageSize: pageSize,
      search: {
        create_start_date,
        create_end_date,
        order_id,
        customer_name,
        customer_phone,
        logistics_name,
        vehicle_number,
        status
      }
    };
    return request({
      url: "/webAPI/order/list",
      method: "post",
      data
    });
  }
};
