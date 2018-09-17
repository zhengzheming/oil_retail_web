// 定义权限码
import system from "./system";
import basicInfo from "./basicInfo";
import driver from "./driver";
export default {
  ...driver,
  ...basicInfo,
  ...system
};
