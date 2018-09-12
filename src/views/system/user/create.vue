<template>
  <div class="system-user__create">
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
              label="姓名"
              prop="realName">
              <el-input v-model="form.realName"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item
              label="用户名"
              prop="username">
              <el-input v-model="form.username"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="$customConfig.colGutter">
          <el-col :span="12">
            <el-form-item
              label="主角色"
              prop="mainRole">
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
            <el-form-item
              label="手机号"
              prop="phone">
              <el-input v-model="form.phone"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item
              label="状态"
              prop="status">
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
            <el-form-item
              label="E-mail"
              prop="email">
              <el-input v-model="form.email"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="$customConfig.colGutter">
          <el-col :span="12">
            <el-form-item
              label="密码"
              prop="password">
              <el-input
                v-model="form.password"
                type="password"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item
              label="确认密码"
              prop="cpassword">
              <el-input
                v-model="form.cpassword"
                type="password"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="$customConfig.colGutter">
          <el-col :span="24">
            <el-form-item label="权限变更">
              <el-checkbox 
                v-model="form.authFollowRole" 
                true-label="1" 
                false-label="0">根据所选角色变更用户权限，否则保持用户权限不变</el-checkbox>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </card>
  </div>
</template>

<script>
import { fetchRoles } from "@/api/system/user";
import { validateEmail, validatePhone } from "@/utils/validate";

export default {
  name: "SystemUserCreate",
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "" && this.form.cpassword !== "") {
        return callback(new Error("请输入密码"));
      }
      if (this.form.cpassword !== "") {
        this.$refs.form.validateField("cpassword");
      }
      callback();
    };
    const validatePass2 = (rule, value, callback) => {
      if (value === "" && this.form.password !== "") {
        return callback(new Error("请再次输入密码"));
      }
      if (value !== this.form.password) {
        return callback(new Error("两次输入密码不一致!"));
      }
      callback();
    };
    return {
      rules: {
        realName: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        username: { required: true, message: "请输入用户名", trigger: "blur" },
        phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { validator: validatePhone, trigger: "blur" }
        ],
        mainRole: {
          required: true,
          message: "请选择主角色",
          trigger: "change"
        },
        status: { required: true, message: "请选择状态", trigger: "change" },
        email: [
          { required: true, message: "请输入正确的E-mail", trigger: "blur" },
          { validator: validateEmail, trigger: "blur" }
        ],
        password: [{ trigger: "blur", validator: validatePass }],
        cpassword: [{ trigger: "blur", validator: validatePass2 }]
      },
      form: {
        realName: "",
        username: "",
        mainRole: "",
        roles: [],
        phone: "",
        status: "",
        email: "",
        password: "",
        cpassword: "",
        authFollowRole: false
      },
      ui: {
        roleOptions: [],
        statusOptions: [
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
        this.$store.dispatch("system-user-create:update-form", {
          form: val,
          formRef: this.$refs["form"]
        });
      },
      immediate: true,
      deep: true
    }
  },
  created() {
    if (this.$route.query.userId) {
      this.$store.dispatch("system-user-detail:fetch-form").then(detail => {
        this.form = detail;
        if (!this.form.roles) this.form.roles = [];
        this.$nextTick(function() {
          this.$refs.form.clearValidate();
        });
      });
    }
    fetchRoles().then(res => {
      this.ui.roleOptions = res.data.map(role => ({
        label: role.name,
        value: role.role_id
      }));
    });
  },
  mounted() {
    this.$store.dispatch("system-user-create:update-form", {
      form: this.form,
      formRef: this.$refs["form"]
    });
  }
};
</script>
