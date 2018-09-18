<template>
  <el-menu
    :collapse="isCollapse"
    :router="true"
    :default-active="$route.path"
    :collapse-transition="true"
    class="sidebar"
    active-text-color="#fff">
    <router-link
      class="logo"
      to="/"
      tag="span">
      <span
        v-if="isCollapse"
        class="logo-text">油</span>
      <span class="logo-text logo-text--common">油品零售运营P端</span>
    </router-link>
    <sidebar-item
      v-for="route in menuItems"
      :key="route.name"
      :item="route"
      :base-path="route.path"/>
  </el-menu>
</template>

<script>
import ElSubitem from "./ElSubitem.vue";
import SidebarItem from "./SidebarItem";
import { mapGetters } from "vuex";
export default {
  name: "Sidebar",
  components: {
    ElSubitem,
    SidebarItem
  },
  computed: {
    ...mapGetters(["sidebar", "permission_routers"]),
    isCollapse() {
      return !this.sidebar.opened;
    },
    menuItems() {
      return this.sidebar.items;
    }
  },
  created() {
    this.$store.dispatch("updateSidebarItems");
  }
};
</script>

<style lang="scss">
</style>
<style scoped lang="scss">
@import "~@/styles/variables";
@import "~@/styles/modules/app/sidebar.scss";
.logo {
  display: flex;
  height: 50px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  .logo-img {
    width: 26px;
  }
  .logo-text {
    /*margin-left: 10px;*/
    font-size: 16px;
    color: #fff;
    font-weight: 500;
    white-space: nowrap;
  }
}
.v-leave-active,
.el-menu--collapse {
  .logo-text--common {
    display: none;
  }
}
</style>
