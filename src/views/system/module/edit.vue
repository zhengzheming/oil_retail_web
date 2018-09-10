<template>
  <div class="system-user__create">
    <card>
      <span slot="title">修改系统模块</span>
      <el-form
        ref="form"
        :model="form"
        :label-width="$customConfig.labelWidth">
        <el-row :gutter="$customConfig.colGutter">
          <el-col :span="12">
            <el-form-item 
              label="模块名称">
              <el-input v-model="form.moduleName"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item 
              label="图标">
              <el-input v-model="form.moduleIcon"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="$customConfig.colGutter">
          <el-col :span="12">
            <el-form-item 
              label="所属系统">
              <el-input v-model="form.belongs"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="上级模块">
              <el-input v-model="form.superModule"/>  
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="$customConfig.colGutter">
          <el-col :span="12">
            <el-form-item 
              label="权限码">
              <el-input v-model="form.permossionCode"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item 
              label="模块操作">
              <el-input v-model="form.operation"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="$customConfig.colGutter">
          <el-col :span="12">
            <el-form-item 
              label="页面地址">
              <el-input v-model="form.address"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item 
              label="排序码">
              <el-input v-model="form.sortCode"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="$customConfig.colGutter">
          <el-col :span="12">
            <el-form-item 
              label="是否外部链接">
              <el-select
                v-model="form.isOutLink"
                class="form-control"
                placeholder="请选择">
                <el-option
                  v-for="item in ui.roleOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"/>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item 
              label="是否启用">
              <el-select
                v-model="form.isOpen"
                class="form-control"
                placeholder="请选择">
                <el-option
                  v-for="item in ui.roleOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"/>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="$customConfig.colGutter">
          <el-col :span="12">
            <el-form-item 
              label="是否公开">
              <el-select
                v-model="form.isPublic"
                class="form-control"
                placeholder="请选择">
                <el-option
                  v-for="item in ui.roleOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"/>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item 
              label="是否菜单">
              <el-select
                v-model="form.isMenu"
                class="form-control"
                placeholder="请选择">
                <el-option
                  v-for="item in ui.roleOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"/>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="$customConfig.colGutter">
          <el-col :span="12">
            <el-form-item 
              label="备注">
              <el-input v-model="form.remark"/>
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
      form: {
        moduleName: "",
        moduleIcon: "",
        belongs: "",
        superModule: "",
        permossionCode: "",
        operation: "",
        address: "",
        sortCode: "",
        isOutLink: "",
        isOpen: "",
        isPublic: "",
        isMenu: "",
        remark: "",
      },
      ui: {
        roleOptions: [
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
        this.$store.dispatch("systemUserCreate:update-form", {
          form: val,
          formRef: this.$refs["form"]
        });
      },
      immediate: true,
      deep: true
    }
  },
  mounted() {
    this.$store.dispatch("systemUserCreate:update-form", {
      form: this.form,
      formRef: this.$refs["form"]
    });
  }
};
</script>
