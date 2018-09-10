const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  status: state => state.user.status,
  authCodes: state => state.user.authCodes,
  setting: state => state.user.setting,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  systemUserDetail: state => state.system.user.systemUserDetail,
  systemRoleDetail: state => state.system.role.systemRoleDetail
};
export default getters;
