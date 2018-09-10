const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  name: state => state.user.name,
  status: state => state.user.status,
  authCodes: state => state.user.authCodes,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  systemUserDetail: state => state.system.user.systemUserDetail,
  systemRoleDetail: state => state.system.role.systemRoleDetail
};
export default getters;
