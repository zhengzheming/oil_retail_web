import request from "@/utils/request";

export const detail = (vehicle_id) => {
    const params = {
        vehicle_id
      };
    return request({
      url: "/webAPI/vehicle/detail",
      method: "get",
      params
    });
}