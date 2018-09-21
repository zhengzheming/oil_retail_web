import orderManageDetail from "@/views/orderManage/detail";
import oilGoodsCreate from "@/views/basicInfo/oilGoods/create";
import oilGoodsDetail from "@/views/basicInfo/oilGoods/detail";
import oilStationDetail from "@/views/oilStationManage/oilStation/detail";

import logisticsEnterpriseEdit from "@/views/basicInfo/logisticsEnterprise/edit";
import logisticsEnterpriseDetail from "@/views/basicInfo/logisticsEnterprise/detail";

import driverDetail from "@/views/logisticsManage/driverDetail";

import vehicleDetail from "@/views/basicInfo/vehicleData/detail";

import addLimit from "@/views/logisticsManage/addLimit";

export default {
  "order-detail": orderManageDetail,
  "oil-goods-detail": oilGoodsDetail,
  "oil-goods-create": oilGoodsCreate,
  "oil-goods-modify": oilGoodsCreate,

  "logisticsEdit": logisticsEnterpriseEdit,
  "logisticsDetail": logisticsEnterpriseDetail,

  "driverDetail": driverDetail,

  "vehicleDataDetail": vehicleDetail,

  "enterpriseDayQuotaAdd": addLimit,

  "vehicleDayQuotaAdd": addLimit,
  "oil-station-checked-detail": oilStationDetail
};
