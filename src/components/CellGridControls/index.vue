<template>
  <div class="cell-grid__controls">
    <slot name="control-1"/>
    <span>{{ splitSign }}</span>
    <slot name="control-2"/>
  </div>
</template>

<script>
export default {
  name: "CellGridControls",
  props: {
    splitSign: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
// 单行多控件
.cell-grid__controls {
  display: flex;
  align-items: center;
  $gap: 15px;
  & > *:first-child,
  & > *:last-child {
    width: calc(50% - #{$gap});
  }
  & > *:nth-child(2) {
    display: inline-block;
    width: $gap * 2;
  }
}
</style>
