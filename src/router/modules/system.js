import Layout from "@/views/layout/Layout";
import systemModule from '@/views/system/module/index'
import moduleEdit from '@/views/system/module/edit'
import moduleDetail from '@/views/system/module/detail'

import systemUserCreate from "@/views/system/user/create";
import systemUserDetail from "@/views/system/user/detail";

import systemRoleCreate from "@/views/system/role/create";
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
            title: "列表"
          }
        },
        {
          path: "create",
          name: "system-user-create",
          component: systemUserCreate,
          meta: {
            title: "添加用户"
          }
        },
        {
          path: "modify",
          name: "system-user-modify",
          component: systemUserCreate,
          meta: {
            title: "修改用户"
          }
        },
        {
          path: "detail",
          name: "system-user-detail",
          component: systemUserDetail,
          meta: {
            title: "用户详情"
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
          name: "system-user-role",
          component: commonList,
          meta: {
            title: "列表"
          }
        },
        {
          path: "create",
          name: "system-role-create",
          component: systemRoleCreate,
          meta: {
            title: "添加角色"
          }
        },
        {
          path: "modify",
          name: "system-role-modify",
          component: systemUserCreate,
          meta: {
            title: "修改角色"
          }
        },
        {
          path: "detail",
          name: "system-role-detail",
          component: systemUserDetail,
          meta: {
            title: "角色详情"
          }
        }
      ]
    },
    {
      path: "module",
      name: "system-module",
      component: systemModule,
      meta: {
        title: "模块管理"
      }
    },
    {
      path: 'module/detail',
      name:'moduleDetail',
      component: moduleDetail
    },
    {
      path: 'module/edit',
      name: 'moduleEdit',
      component: moduleEdit
    },
    {
      path: 'module/add',
      name:'addModule',
      component: moduleEdit
    }
  ]
};
