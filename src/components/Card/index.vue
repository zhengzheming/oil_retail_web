<template>
  <div
    :style="inlineStyle"
    class="o-card">
    <div class="card__title h"><slot name="title"/></div>
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
    }
  },
  computed: {
    inlineStyle() {
      return `margin: ${this.gutter}; padding: ${this.innerGutter}`;
    }
  }
};
</script>

<style scoped>
.o-card {
  background-color: #fff;
}
.card__title {
  margin-bottom: 24px;
}
</style>
