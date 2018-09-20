<template>
  <transition name="side-content">
    <div
      v-show="visible"
      class="side-content__wrapper"
      @click.self="hide">
      <div class="side-content">
        <slot/>
      </div>
    </div>
  </transition>
</template>

<script>
import Popup from "element-ui/src/utils/popup";
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
    }
  },
  watch: {
    sideContentVisible(val) {
      this.visible = val;
    }
  },
  methods: {
    hide() {
      this.$store.dispatch("showSideContent", false);
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
}
</style>
