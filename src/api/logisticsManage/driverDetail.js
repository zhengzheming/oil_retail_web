import request from "@/utils/request";

export const detail = (driver_id) => {
    const params = {
        driver_id
      };
    return request({
      url: "/webAPI/driver/detail",
      method: "get",
      params
    });
}