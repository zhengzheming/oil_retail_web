import systemUser from "./modules/system/user";
import systemRole from "./modules/system/role";
import systemModule from "./modules/system/module";
import basicInfoVehicle from "./modules/basicInfo/vehicle";
import basicInfoLogistics from "./modules/basicInfo/logistics";
import physicalManageDriver from "./modules/physicalManage/driver";
import physicalManageQueta from "./modules/physicalManage/quota";
import physicalManageLimit from "./modules/physicalManage/limitQuota";
export default {
  ...systemUser,
  ...systemRole,
  ...systemModule,
  ...basicInfoVehicle,
  ...basicInfoLogistics,
  ...physicalManageDriver,
  ...physicalManageQueta,
  ...physicalManageLimit
};
