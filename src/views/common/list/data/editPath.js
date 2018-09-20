import { editPath as system } from "./modules/system";
import { editPath as basicInfo } from "./modules/basicInfo";
import { editPath as oilStationManage } from "./modules/oil-station-manage";
import { editPath as physicalManage } from "./modules/physicalManage";
export default {
  ...system,
  ...basicInfo,
  ...oilStationManage,
  ...physicalManage
};
