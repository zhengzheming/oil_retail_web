import Layout from "@/views/layout/Layout";
import systemModule from "@/views/system/module/index";
import moduleEdit from "@/views/system/module/edit";
import moduleDetail from "@/views/system/module/detail";

import systemUserCreate from "@/views/system/user/create";
import systemUserDetail from "@/views/system/user/detail";
import systemUserAuth from "@/views/system/user/auth";

import systemRoleCreate from "@/views/system/role/create";
import systemRoleDetail from "@/views/system/role/detail";
import systemRoleAuth from "@/views/system/role/auth";
import commonList from "@/views/common/list";
const placeholderView = {
  render(h) {
    return h("router-view");
  },
  name: "placeholderView"
};
export default {
  path: "/system",
  name: "system",
  component: Layout,
  meta: {
    title: "系统管理",
    icon: "icon icon-shezhi"
  },
  children: [
    {
      path: "user",
      name: "system-user",
      component: placeholderView,
      meta: {
        title: "系统用户"
      },
      children: [
        {
          path: "index",
          name: "system-user-list",
          component: commonList,
          meta: {
            title: "列表",
            module: "/system/user/index"
          }
        },
        {
          path: "create",
          name: "system-user-create",
          component: systemUserCreate,
          meta: {
            title: "添加用户",
            module: "/system/user/index"
          }
        },
        {
          path: "modify",
          name: "system-user-modify",
          component: systemUserCreate,
          meta: {
            title: "修改用户",
            module: "/system/user/index"
          }
        },
        {
          path: "detail",
          name: "system-user-detail",
          component: systemUserDetail,
          meta: {
            title: "用户详情",
            module: "/system/user/index"
          }
        },
        {
          path: "auth",
          name: "system-user-auth",
          component: systemUserAuth,
          meta: {
            title: "用户权限",
            module: "/system/user/index"
          }
        }
      ]
    },
    {
      path: "role",
      name: "system-role",
      component: placeholderView,
      meta: {
        title: "角色管理"
      },
      children: [
        {
          path: "index",
          name: "system-role-list",
          component: commonList,
          meta: {
            title: "列表",
            module: "/system/role/index"
          }
        },
        {
          path: "create",
          name: "system-role-create",
          component: systemRoleCreate,
          meta: {
            title: "添加角色",
            module: "/system/role/index"
          }
        },
        {
          path: "modify",
          name: "system-role-modify",
          component: systemRoleCreate,
          meta: {
            title: "修改角色",
            module: "/system/role/index"
          }
        },
        {
          path: "detail",
          name: "system-role-detail",
          component: systemRoleDetail,
          meta: {
            title: "角色详情",
            module: "/system/role/index"
          }
        },
        {
          path: "auth",
          name: "system-role-auth",
          component: systemRoleAuth,
          meta: {
            title: "角色权限",
            module: "/system/role/index"
          }
        }
      ]
    },
    {
      path: "module",
      name: "systemModule",
      component: systemModule,
      meta: {
        title: "模块管理"
      }
    },
    {
      path: "module/detail",
      name: "moduleDetail",
      component: moduleDetail,
      meta: {
        module: "/system/module"
      }
    },
    {
      path: "module/edit",
      name: "moduleEdit",
      component: moduleEdit,
      meta: {
        module: "/system/module"
      }
    },
    {
      path: "module/add",
      name: "addModule",
      component: moduleEdit,
      meta: {
        module: "/system/module"
      }
    }
  ]
};
