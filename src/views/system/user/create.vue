<template>
  <div class="system-user__create">
    <card>
      <span slot="title">请在下面填写</span>
      <el-form
        ref="form"
        :model="form"
        :label-width="$customConfig.labelWidth">
        <el-row :gutter="$customConfig.colGutter">
          <el-col :span="12">
            <el-form-item label="姓名">
              <el-input v-model="form.realName"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="用户名">
              <el-input v-model="form.username"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="$customConfig.colGutter">
          <el-col :span="12">
            <el-form-item label="主角色">
              <el-select
                v-model="form.mainRole"
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
            <el-form-item label="从角色">
              <el-select
                v-model="form.roles"
                placeholder="请选择"
                class="form-control"
                multiple
                check-all-able>
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
            <el-form-item label="手机号">
              <el-input v-model="form.phone"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="状态">
              <el-select
                v-model="form.status"
                class="form-control"
                placeholder="请选择">
                <el-option
                  v-for="item in ui.statusOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"/>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="$customConfig.colGutter">
          <el-col :span="12">
            <el-form-item label="E-mail">
              <el-input v-model="form.email"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="$customConfig.colGutter">
          <el-col :span="12">
            <el-form-item label="密码">
              <el-input v-model="form.password"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="确认密码">
              <el-input v-model="form.cpassword"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="$customConfig.colGutter">
          <el-col :span="24">
            <el-form-item label="权限变更">
              <el-checkbox v-model="form.authFollowRole">根据所选角色变更用户权限，否则保持用户权限不变</el-checkbox>
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
        realName: "",
        username: "",
        mainRole: "",
        roles: [],
        phone: "",
        status: "",
        email: "",
        cpassword: "",
        authFollowRole: false
      },
      ui: {
        roleOptions: [],
        statusOptions: []
      }
    };
  }
};
</script>
