<template>
  <div class="form-control--static">
    <span class="form-control--static__title">{{ title }}</span>
    <span class="form-control--static__text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: "FormControlStatic",
  props: {
    title: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss">
.form-control--static {
  display: flex;
  .form-control--static__title {
    display: inline-block;
    text-align: right;
    width: 120px;
    margin-right: 14px;
    &::after {
      content: ":";
    }
  }
}
</style>
