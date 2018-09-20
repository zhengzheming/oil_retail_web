<template>
  <div class="form-control--static">
    <span class="form-control--static__title">{{ title }}</span>
    <span class="form-control--static__text">
      <span v-if="textString">{{ text | protectVal }}</span>
      <span v-else><slot/></span>
    </span>
  </div>
</template>

<script>
export default {
  name: "FormControlStatic",
  filters: {
    protectVal(text) {
      const type = $utils.typeIs(text);
      const condition = type === "null" || type === "undefined";
      return condition ? "--" : text;
    }
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    text: {
      type: [String, Number],
      default: ""
    }
  },
  computed: {
    textString() {
      return String(this.text);
    }
  }
};
</script>

<style lang="scss">
.form-control--static {
  display: flex;
  line-height: 22px;
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
