<template>
  <div class="reset-pwd">
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
              label="原密码"
              prop="realName">
              <el-input v-model="form.password"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="$customConfig.colGutter">
          <el-col :span="12">
            <el-form-item
              label="新密码"
              prop="realName">
              <el-input v-model="form.newPassword"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="$customConfig.colGutter">
          <el-col :span="12">
            <el-form-item
              label="确认密码"
              prop="realName">
              <el-input v-model="form.cpassword"/>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </card>
  </div>
</template>

<script>
export default {
  name: "ResetPwd",
  data() {
    const labels = {
      password: "原密码",
      newPassword: "新密码",
      cpassword: "确认密码"
    };

    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass");
        }
        callback();
      }
    };
    const validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };

    return {
      form: {},
      rules: {
        password: {
          required: true,
          message: $verify.getErrorMessage("required", labels.password)
        },
        newPassword: [
          {
            required: true,
            message: $verify.getErrorMessage("required", labels.newPassword)
          },
          { validator: validatePass }
        ],
        cpassword: [
          {
            required: true,
            message: $verify.getErrorMessage("required", labels.cpassword)
          },
          { validator: validatePass2 }
        ]
      }
    };
  }
};
</script>
