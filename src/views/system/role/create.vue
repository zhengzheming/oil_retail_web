<template>
  <div class="system-role__create">
    <card>
      <span slot="title">请在下面填写</span>
      <el-form
        ref="form"
        :rules="rules"
        :model="form"
        :label-width="$customConfig.labelWidth">
        <el-row :gutter="$customConfig.colGutter">
          <el-col :span="12">
            <el-form-item
              label="角色名"
              prop="roleName">
              <el-input v-model="form.roleName"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item
              label="角色状态"
              prop="roleStatus">
              <el-select
                v-model="form.roleStatus"
                class="form-control"
                placeholder="请选择">
                <el-option
                  v-for="item in ui.roleStatusOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"/>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item
              label="备注"
              prop="remark">
              <el-input
                :rows="2"
                v-model="form.remark"
                type="textarea"
                placeholder="备注"/>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </card>
  </div>
</template>

<script>
export default {
  name: "SystemUserCreate",
  data() {
    return {
      rules: {
        roleName: [{ required: true, message: "请输入角色名", trigger: "blur" }]
      },
      form: {
        roleName: "",
        roleStatus: "1",
        remark: ""
      },
      ui: {
        roleStatusOptions: [
          {
            value: "1",
            label: "启用"
          },
          {
            value: "0",
            label: "未启用"
          }
        ]
      }
    };
  },
  watch: {
    form: {
      handler: function(val) {
        this.$store.dispatch("system-role-create:update-form", {
          form: val,
          formRef: this.$refs["form"]
        });
      },
      immediate: true,
      deep: true
    }
  },
  created() {
    if (this.$route.query.roleId) {
      this.$store.dispatch("system-role-detail:fetch-form").then(detail => {
        this.form = detail;
        if (!this.form.roles) this.form.roles = [];
        this.$nextTick(function() {
          this.$refs.form.clearValidate();
        });
      });
    }
  },
  mounted() {
    this.$store.dispatch("system-role-create:update-form", {
      form: this.form,
      formRef: this.$refs["form"]
    });
  }
};
</script>
