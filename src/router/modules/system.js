import Layout from "@/views/layout/Layout";
import systemModule from '@/views/system/module/index'
import moduleEdit from '@/views/system/module/edit'
import moduleDetail from '@/views/system/module/detail'

import systemUser from "@/views/system/user/list";
import systemUserCreate from "@/views/system/user/create";
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
          path: "create",
          name: "system-user-create",
          component: systemUserCreate,
          meta: {
            title: "添加用户"
          }
        }
      ]
    },
    {
      path: "role",
      name: "system-role",
      component: systemUser,
      meta: {
        title: "角色管理"
      }
    },
    {
      path: 'module',
      name: 'system-module',
      component: systemModule,
      meta: {
        title: '模块管理'
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
