<template>
  <el-menu-item
    :index="uid"
    :route="router"
    v-if="router && router.path">
    <i
      class="menu-item-icon"
      v-if="icon"
      v-html="icon"/>
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
        v-if="icon"
        v-html="icon"/>
      <span>{{ name }}</span>
    </template>
    <el-subitem
      v-for="(item,index) in items"
      :data="item"
      :uid="item.code"
      :key="index"
      :type="item.type"
      :icon="item.icon"
      :name="item.name"
      :items="item.items"
      :router="item.router"
      :link="item.link"/>
  </el-submenu>
</template>

<script>
export default {
  name: 'ElSubitem',
  props: {
    uid: {
      type: String,
      default: '0'
    },
    type: {
      type: String,
      default: 'item'
    },
    isHeader: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    badge: {
      type: Object,
      default() {
        return {};
      }
    },
    items: {
      type: Array,
      default() {
        return [];
      }
    },
    router: {
      type: Object,
      default() {
        return {
          name: ''
        };
      }
    },
    link: {
      type: String,
      default: ''
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
