import Vue from "vue";
import Router from "vue-router";
import mainRoutes from '@/router/modules/route.config'
import Layout from '@/views/layout/Layout'

Vue.use(Router);

export const constantRouterMap = [
  {
    path: '',
    component: Layout,
    children: [
      ...mainRoutes
    ]
  }
]
export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
});
