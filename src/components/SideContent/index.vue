<template>
  <transition name="side-content">
    <div
      v-show="visible"
      class="side-content__wrapper"
      @click.self="hide">
      <div class="side-content">
        <slot/>
        <div class="side-content__actions">
          <el-button
            v-for="(item, index) in breadcrumbModuel.actions"
            v-if="!item.hidden && isShow[`is_can_${item.action}`] !==false"
            :key="index"
            :type="!item.plain ? item.type : ''"
            :plain="item.plain"
            @click="execute(item.action)">{{ item.name }}</el-button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Popup from "element-ui/lib/utils/popup";
export default {
  name: "SideContent",
  mixins: [Popup],
  props: {
    modal: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    sideContentVisible() {
      return this.$store.state.listPage.sideContentVisible;
    },
    breadcrumbModuel() {
      return (
        this.$store.state.breadcrumb.config[this.currentSlideRoute.name] || {}
      );
    },
    isShow() {
      return this.$store.state.breadcrumb.actions;
    },
    currentSlideRoute() {
      return this.$store.state.listPage.slideRoute;
    }
  },
  watch: {
    sideContentVisible(val) {
      this.visible = val;
    }
  },
  methods: {
    execute(methodName) {
      this.$store.dispatch(`${this.currentSlideRoute.name}:${methodName}`);
    },
    hide() {
      // 侧拉处理
      this.$store.dispatch("listPage:hide-side-content");
      // this.$emit("update:visible", false);
    }
  }
};
</script>

<style scoped lang="scss">
@import "~@/styles/funcs";
.side-content-enter,
.side-content-leave-to {
  transform: translate3d(100%, 0, 0);
}
.side-content__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row-reverse;
  transition: all 0.3s;
}
.side-content {
  width: 60%;
  height: 100vh;
  background-color: #fff;
  /deep/ > *:first-child {
    margin: 0 !important;
  }
}
.side-content__actions {
  text-align: center;
  margin-top: -24px;
}
</style>
