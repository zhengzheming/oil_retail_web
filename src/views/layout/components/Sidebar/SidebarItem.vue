<template>
  <div
    v-if="!item.hidden&&item.children"
    class="menu-wrapper">

    <template v-if="hasOneShowingChild(item.children) && !onlyOneChild.children.length&&!item.alwaysShow">
      <a
        :href="onlyOneChild.path"
        target="_blank"
        @click="clickLink(onlyOneChild.path,$event)">
        <el-menu-item
          :index="resolvePath(onlyOneChild.path)"
          :class="{'submenu-title-noDropdown':!isNest}">
          <item
            v-if="onlyOneChild.meta"
            :icon="onlyOneChild.meta.icon"
            :title="(onlyOneChild.meta.title)" />
        </el-menu-item>
      </a>
    </template>

    <template v-else-if="!item.children.length">
      <a
        :href="item.path"
        target="_blank"
        @click="clickLink(item.path,$event)">
        <el-menu-item
          :index="resolvePath(item.path)">
          <item
            v-if="item.meta"
            :icon="item.meta.icon"
            :title="(item.meta.title)" />
        </el-menu-item>
      </a>
    </template>

    <el-submenu
      v-else
      :index="item.name||item.path"
      class="submenu">
      <template slot="title">
        <item
          v-if="item.meta"
          :icon="item.meta.icon"
          :title="(item.meta.title)"/>
      </template>

      <template
        v-for="child in item.children"
        v-if="!child.hidden">
        <sidebar-item
          v-if="child.children&&child.children.length>0"
          :is-nest="true"
          :item="child"
          :key="child.name"
          :base-path="resolvePath(child.path)"
          class="nest-menu"/>

        <a
          v-else
          :href="child.path"
          :key="child.name"
          target="_blank"
          @click="clickLink(child.path,$event)">
          <el-menu-item
            :index="resolvePath(child.path)"
            class="submenu-item">
            <item
              v-if="child.meta"
              :icon="child.meta.icon"
              :title="(child.meta.title)" />
          </el-menu-item>
        </a>
      </template>
    </el-submenu>

  </div>
</template>

<script>
import path from "path";
import { isvalidURL } from "@/utils/validate";
import Item from "./Item";

export default {
  name: "SidebarItem",
  components: { Item },
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      onlyOneChild: null
    };
  },
  methods: {
    hasOneShowingChild(children) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false;
        } else {
          // temp set(will be used if only has one showing child )
          this.onlyOneChild = item;
          return true;
        }
      });
      if (showingChildren.length === 1) {
        return true;
      }
      return false;
    },
    resolvePath(routePath) {
      return path.resolve(this.basePath, routePath);
    },
    isExternalLink(routePath) {
      return isvalidURL(routePath);
    },
    clickLink(routePath, e) {
      if (!this.isExternalLink(routePath)) {
        e.preventDefault();
        const path = this.resolvePath(routePath);
        this.$router.push(path);
      }
    }
  }
};
</script>

<style lang="scss">
.nest-menu.menu-wrapper {
  .el-menu-item {
    padding-left: 45px !important;
  }
}
</style>
