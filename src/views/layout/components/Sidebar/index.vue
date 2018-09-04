<template>
  <el-menu
          class="sidebar"
          :collapse="isCollapse"
          text-color="#666"
          :default-active="$route.path"
          :collapse-transition="true"
          active-text-color="#ff6200">
    <router-link class="logo" to="/" tag="span">
      <img  src="~@/assets/img/logo3.png"
            alt="中优油管家"
            class="logo-img">
      <span class="logo-text">中优油管家</span>
    </router-link>
    <template v-for="(item,index) in sidebarItems">
      <el-subitem
              :data="item"
              :key="index"
              :uid="item.code"
              :type="item.type"
              :icon="item.icon"
              :name="item.name"
              :items="item.items"
              :router="item.router"
              :link="item.link"/>
    </template>
  </el-menu>
</template>

<script>
import ElSubitem from "./ElSubitem.vue";
import { mapGetters } from 'vuex'
export default {
  name: 'Sidebar',
  components: {
    ElSubitem
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    isCollapse() {
      return !this.sidebar.opened
    },
    sidebarItems() {
      return this.sidebar.items
    }
  },
  props: {
    sideMenuItems: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss">
.el-menu {
  .el-menu-item {
    a {
      display: block;
    }
  }
}
.el-submenu .el-menu-item,
.el-submenu__title {
  height: 50px;
}
[role="menubar"] > [role="menuitem"] {
  & > .el-submenu__title {
    height: 60px;
  }
}
.el-submenu .el-submenu .el-submenu__title {
  padding-left: 50px !important;
}
.el-submenu .el-menu-item {
  padding-left: 50px !important;
}
[role="menubar"] > [role="menuitem"] > [role="menu"] > * {
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #999;
    top: 24px;
    left: 28px;
    z-index: 1;
  }
}
</style>
<style scoped lang="scss">
@import "~@/styles/variables";
.logo {
  display: flex;
  height: 60px;
  cursor: pointer;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  .logo-img {
    width: 26px;
  }
  .logo-text {
    margin-left: 10px;
    font-size: 20px;
    color: $logo-text;
    font-weight: 500;
    white-space: nowrap;
  }
}
.v-leave-active,
.el-menu--collapse {
  .logo-text {
    display: none;
  }
}
</style>
