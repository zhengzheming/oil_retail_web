import request from "@/utils/request";

export default {
    'logistics': (logistics_id) => {
        const params = {
            logistics_id
          };
        return request({
          url: "/webAPI/LogisticsCompany/detail",
          method: "get",
          params
        });
    }
}