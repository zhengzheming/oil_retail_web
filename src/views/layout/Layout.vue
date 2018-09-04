<template>
    <div class="app-wrapper" :class="{ collapse: isCollapse}">
        <sidebar :side-menu-items="sideMenuItems"/>
        <div class="main-container">
            <navbar/>
            <app-main/>
        </div>
    </div>
</template>

<script>
import { Sidebar, AppMain, Navbar } from "./components";
import { mapGetters } from 'vuex'
export default {
  name: "Layout",
  components: {
    Sidebar,
    AppMain,
    Navbar
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  data() {
    return {
      sideMenuItems: [],
    };
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~@/styles/variables";
@import "~@/styles/mixin.scss";
@import "~@/styles/funcs";
body {
  background-color: $bgColor;
}
.app-wrapper {
  display: flex;
  min-height: 100vh;
  .main-container {
    flex: 1;
    padding-top: 50px * 2;
    width: calc(100% - 230px);
    .navbar,
    .menu-path {
      width: calc(100% - 230px);
    }
  }
  &.collapse {
    .navbar,
    .menu-path,
    .main-container {
      width: calc(100% - 64px);
    }
  }
  .main-container,
  .navbar,
  .menu-path {
    transition: 0.3s ease-in-out;
  }
}

.sidebar {
  z-index: z(sidebar);
  background-color: #fff;
  flex-shrink: 0;
  &:not(.el-menu--collapse) {
    width: 230px;
  }
  a {
    text-decoration: none;
  }
}

.navbar,
.menu-path {
  z-index: z(feats-menu);
  position: fixed;
  top: 0;
  right: 0;
  height: 50px;
}
.menu-path {
  z-index: z(menu-path);
  top: 50px;
}
</style>
