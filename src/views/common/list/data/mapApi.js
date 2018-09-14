import request from "@/utils/request";

export default {
    logistics: function() {
        return request({
            url: "/webAPI/logisticsCommon/dropDownListMap",
            method: "get"
        });
    },
    driver: function() {
        return request({
            url: "/webAPI/logisticsCommon/dropDownListMap",
            method: "get"
        });
    }
}