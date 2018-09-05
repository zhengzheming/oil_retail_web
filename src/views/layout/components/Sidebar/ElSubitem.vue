<template>
  <el-menu-item
    :index="uid"
    :route="route"
    v-if="route && route.path">
    <i
      class="menu-item-icon"
      :class="icon"
      v-if="icon"/>
    <span slot="title">{{ name }}</span>
  </el-menu-item>
  <el-menu-item
    :index="uid"
    v-else-if="link">
    <a :href="link">
      <i
        class="menu-item-icon"
        v-if="icon"
        v-html="icon"/>
      <span slot="title">{{ name }}</span>
    </a>
  </el-menu-item>
  <el-submenu
    :index="uid"
    v-else>
    <template slot="title">
      <i
        class="menu-item-icon"
        :class="icon"
        v-if="icon"/>
      <span>{{ name }}</span>
    </template>
    <el-subitem
      v-for="(item,index) in subItems"
      :info-obj="item" :key="index"/>
  </el-submenu>
</template>

<script>
export default {
  name: "ElSubitem",
  props: {
    infoObj: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    uid() {
      return this.infoObj.page_url;
    },
    route() {
      if (this.subItems.length) return "";
      return { path: this.infoObj.page_url };
    },
    icon() {
      return this.infoObj.icon;
    },
    link() {
      if (this.subItems.length) return "";
      return this.infoObj.page_url;
    },
    name() {
      return this.infoObj.name;
    },
    subItems() {
      return this.infoObj.children || [];
    }
  }
};
</script>

<style scoped lang="scss">
.side-menu .menu-item-icon {
  margin-right: 10px;
  & + * {
    // inline-block gap
    margin-left: -5px;
  }
}
</style>
