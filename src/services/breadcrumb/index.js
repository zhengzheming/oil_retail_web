// 根据路由名称配置面包屑
import systemUser from "./modules/system/user";
import systemRole from "./modules/system/role";
import systemModule from "./modules/system/module";
import basicInfoVehicle from "./modules/basicInfo/vehicle";
import basicInfoLogistics from "./modules/basicInfo/logistics";
import physicalManageDriver from "./modules/physicalManage/driver";
import physicalManageQueta from "./modules/physicalManage/quota";
import physicalManageLimit from "./modules/physicalManage/limitQuota";
import oilCompany from "./modules/basicInfo/oilCompany";
import oilGoods from "./modules/basicInfo/oilGoods";
import oilStation from "./modules/oilStationManage/oil-station";
import oilStationChecked from "./modules/basicInfo/oilStationChecked";
import resetPwd from "./modules/resetPwd";
import priceImport from "./modules/priceManage/priceImport";
export default {
  ...systemUser,
  ...systemRole,
  ...systemModule,
  ...basicInfoVehicle,
  ...basicInfoLogistics,
  ...physicalManageDriver,
  ...physicalManageQueta,
  ...physicalManageLimit,
  ...oilCompany,
  ...oilGoods,
  ...oilStation,
  ...oilStationChecked,
  ...resetPwd,
  ...priceImport
};
