import request from "@/utils/request";

export const getMap = () => {
    return request({
        url: "/admin/common/dropDownListMap",
        method: "get"
    });
}