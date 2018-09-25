<template>
  <el-upload
    :action="action"
    :data="data"
    :multiple="multiple"
    :limit="limit"
    :on-remove="(file, fileList) => handleRemove(file, fileList)"
    :on-success="(res, file, fileList) => handleSuccess(res, file, fileList)"
    :on-error="handleError"
    :on-exceed="onExceed"
    :file-list="fileList"
    :http-request="$requestForUpload"
    name="files[]">
    <slot/>
  </el-upload>
</template>

<script>
export default {
  name: "Uploader",
  props: {
    data: {
      type: Object,
      default: () => ({})
    },
    action: {
      type: String,
      default: ""
    },
    multiple: {
      type: Boolean,
      default: true
    },
    limit: {
      type: Number,
      default: 99
    },
    onRemove: {
      type: Function,
      default: function() {}
    },
    onSuccess: {
      type: Function,
      default: function() {}
    },
    onError: {
      type: Function,
      default: function() {}
    },
    onExceed: {
      type: Function,
      default: function() {}
    },
    fileList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    notifyForm() {
      this.dispatch("ElFormItem", "el.form.blur", [this.model]);
      this.dispatch("ElFormItem", "el.form.change", [this.model]);
    },
    handleError() {
      this.onError();
      this.notifyForm();
    },
    handleSuccess(res, file, fileList) {
      this.onSuccess(res, file, fileList);
      this.notifyForm();
    },
    handleRemove(file, fileList) {
      this.onRemove(file, fileList).then(() => {
        this.notifyForm();
      });
    },
    dispatch(componentName, eventName, params) {
      var parent = this.$parent || this.$root;
      var name = parent.$options.componentName;

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;

        if (parent) {
          name = parent.$options.componentName;
        }
      }
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    }
  }
};
</script>
