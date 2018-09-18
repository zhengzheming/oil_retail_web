import request from "@/utils/request";

export const fetchPriceApply = () =>
  request({
    url: "/webAPI/oilPriceApply/submit",
    method: "get"
  });

export const createPriceImportApply = ({ fileId }) =>
  request({
    url: "/webAPI/oilPriceApply/submit",
    method: "post",
    data: {
      file_id: fileId
    }
  });
