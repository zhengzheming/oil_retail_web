<template>
  <el-menu
          class="sidebar"
          :collapse="isCollapse"
          :router="true"
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
    <sidebar-item v-for="route in permission_routers" :key="route.name" :item="route" :base-path="route.path"/>
  </el-menu>
</template>

<script>
import ElSubitem from "./ElSubitem.vue";
import SidebarItem from "./SidebarItem";
import { mapGetters } from "vuex";
import { getMenu } from "@/api/app";
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
    sidebarItems() {
      return this.sidebar.items;
    }
  },
  created() {
    getMenu().then(res => {
      if (res.state !== 0) {
        return;
      }
      this.$store.dispatch("updateSidebarItems", { items: res.data });
    });
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
