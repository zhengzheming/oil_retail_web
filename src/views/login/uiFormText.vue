<template>
  <el-form-item
    :class="['ui-form-item', {'ui-form-item--activated':activated}]"
    :label="label"
    :prop="prop">
    <el-input
      v-trim
      v-detect-autofill="onAutofill"
      v-model="currentValue"
      :type="type"
      :autofocus="autofocus"
      auto-complete="on"
      @focus="inputFocus"
      @blur="inputBlur"
      @change="inputChange"/>
  </el-form-item>
</template>
<script>
import debounce from "lodash/debounce";
export default {
  name: "UiFormText",
  directives: {
    trim: {
      bind(el) {
        const input = el.querySelector("input");
        const changeHandler = debounce(function() {
          this.value = this.value.trim();
        }, 600);
        input.addEventListener("input", changeHandler);
      }
    },
    detectAutofill: {
      bind(el, binding, vnode) {
        const AUTOFILLED = "is-autofilled";
        const context = vnode.context;
        const onAutoFillStart = el => el.classList.add(AUTOFILLED);
        const onAutoFillCancel = el => el.classList.remove(AUTOFILLED);
        const onAnimationStart = ({ target, animationName }) => {
          switch (animationName) {
            case "onAutoFillStart": {
              const cb = context[binding.expression];
              if (typeof cb === "function") cb();
              return onAutoFillStart(target);
            }
            case "onAutoFillCancel":
              return onAutoFillCancel(target);
          }
        };
        const input = el.querySelector("input");
        input.addEventListener("animationstart", onAnimationStart, false);
      }
    }
  },
  props: {
    autofocus: {
      type: Boolean,
      default: false
    },
    prop: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    value: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      isFocus: false
    };
  },
  computed: {
    activated() {
      return this.isFocus || this.value.length > 0;
    },
    currentValue: {
      get() {
        return this.value;
      },
      set(v) {
        this.$emit("input", v.trim());
      }
    }
  },
  methods: {
    inputFocus() {
      this.isFocus = true;
      this.$emit("focus");
    },
    inputBlur() {
      this.isFocus = false;
      this.$emit("blur");
    },
    inputChange() {
      this.$emit("change");
    },
    onAutofill() {
      this.isFocus = true;
      this.$emit("autofill");
    }
  }
};
</script>
<style lang="scss">
.ui-form-item {
  position: relative;
  margin-bottom: 24px;
  .el-form-item__content {
    z-index: 2;
  }
  .el-input__inner {
    height: 60px;
    padding: 24px 15px 0;
    background: transparent;
  }

  .el-form-item__label {
    position: absolute;
    z-index: 1;
    top: 14px;
    left: 15px;
    color: #999;
    transition: transform 0.2s linear;
    &:before {
      display: none;
    }
  }

  &--activated {
    .el-form-item__label {
      transform: translate(-3px, -10px) scale(0.87);
    }
  }
}
</style>
