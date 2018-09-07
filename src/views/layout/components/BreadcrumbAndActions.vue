<template>
  <section class="menu-path">
    <el-breadcrumb 
      separator-class="el-icon-arrow-right" 
      can-back 
      @back="goBack">
      <el-breadcrumb-item 
        v-for="(item, index) in breadcrumbModuel.items" 
        :key="index">{{ item }}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="menu-path__actions">
      <el-button 
        v-for="(item, index) in breadcrumbModuel.actions" 
        :key="index" 
        :type="item.type" 
        @click="execute(item.action)">{{ item.name }}</el-button>
    </div>
  </section>
</template>

<script>
import breadCrumbConfig from "@/services/breadcrumb";
export default {
  computed: {
    breadcrumbModuel() {
      return breadCrumbConfig[this.$route.name] || {};
    }
  },
  methods: {
    goBack() {
      history.back();
    },
    execute(methodName) {
      this.$store.dispatch(`${this.$route.name}:${methodName}`);
    }
  }
};
</script>

<style scoped lang="scss">
@import "~@/styles/variables";
.menu-path {
  background-color: #fff;
  border-bottom: 1px solid $dc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  font-size: 14px;
  color: $btn-text;
}
.left-part {
  display: flex;
}
.right-part {
  display: flex;
  & > * + * {
    margin-left: 10px;
  }
}
.menu-path_back {
  position: relative;
  margin-right: 30px;
  &::after {
    content: "|";
    position: absolute;
    right: -17px;
    top: 1px;
    color: #e6e6e6;
  }
}
.menu-path_breadcrumb {
  display: flex;
  & > * + * {
    margin-left: 30px;
    position: relative;
    &::before {
      content: ">";
      position: absolute;
      left: -18px;
      top: -1px;
      color: #666666;
    }
  }
  .menu-path_breadcrumb-item {
    &:last-child {
      color: $theme-color;
    }
  }
}
</style>
