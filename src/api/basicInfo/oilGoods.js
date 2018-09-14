import request from "@/utils/request";

export const createOilGoods = ({ goodsId, name, code, sort, remark, status }) =>
  request({
    url: "/webAPI/oilGoods/save",
    method: "post",
    data: {
      goods_id: goodsId,
      name,
      code,
      sort,
      remark,
      status
    }
  });

export const fetchOilGoodsDetail = goodsId =>
  request({
    url: "/webAPI/oilGoods/detail",
    method: "GET",
    params: {
      goods_id: goodsId
    }
  });
