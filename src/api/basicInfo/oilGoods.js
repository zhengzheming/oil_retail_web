import request from "@/utils/request";

export const createOilGoods = ({
  goodsId,
  name,
  code,
  orderIndex,
  remark,
  status
}) =>
  request({
    url: "/webAPI/oilGoods/save",
    method: "post",
    data: {
      goods_id: goodsId,
      name,
      code,
      order_index: orderIndex,
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
