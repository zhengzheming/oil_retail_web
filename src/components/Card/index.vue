<template>
  <div
    :style="inlineStyle"
    class="o-card">
    <div
      v-if="$slots.title"
      :class="{ 'side-content__card': isSlide}"
      class="card__title h">
      <slot name="title"/>
      <i
        v-if="isSlide"
        class="icon icon-chahao-copy close"
        @click="close"/>
    </div>
    <slot/>
  </div>
</template>

<script>
// 基本布局单元
export default {
  name: "Card",
  props: {
    gutter: {
      type: String,
      default: "14px"
    },
    innerGutter: {
      type: String,
      default: "24px"
    },
    isSlide: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    inlineStyle() {
      return `margin: ${this.gutter}; padding: ${this.innerGutter}`;
    }
  },
  methods: {
    close() {
      this.$store.dispatch("listPage:hide-side-content");
    }
  }
};
</script>

<style scoped lang="scss">
.o-card {
  background-color: #fff;
}
.card__title {
  padding-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.side-content__card {
  position: relative;
  margin-bottom: 24px;
  &::before {
    content: "";
    position: absolute;
    left: -24px;
    right: -24px;
    bottom: 0;
    height: 1px;
    background-color: #e6e6e6;
  }
}
.close {
  cursor: pointer;
}
</style>
