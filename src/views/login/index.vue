<template>
  <div class="login__wrapper">
    <div class="login">
      <div class="login__content">
        <h1>HI,欢迎登录</h1>
        <h2>卓达加油-运营端</h2>
        <el-form
          ref="loginForm"
          :model="loginForm"
          :rules="rules"
          autocomplete="off"
          class="login__form"
          @keyup.enter.native.prevent="signIn()">
          <ui-form-text
            :autofocus="true"
            v-model="loginForm.username"
            label="用户名"
            prop="username"/>
          <ui-form-text
            v-model="loginForm.password"
            type="password"
            label="密码"
            prop="password"/>
          <el-form-item>
            <el-button
              :loading="loading"
              type="primary"
              @click.stop="signIn()">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <p class="copyright">服务热线：400-819-7979（ 工作日09:00-21:00 ）<br>Copyright © 2014-2018 卓达加油 All Rights Reserved 粤ICP备15101056号 网站隐私条款</p>
  </div>
</template>
<script>
import uiFormText from "./uiFormText";
export default {
  components: {
    uiFormText
  },
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      loading: false,
      rules: {
        username: [
          {
            required: true,
            message: "用户名不能为空"
          }
        ],
        password: [
          {
            required: true,
            message: "密码不能为空"
          }
        ]
      }
    };
  },
  methods: {
    signIn() {
      if (this.loading) return false;
      this.loading = true;
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("LoginByUsername", this.loginForm)
            .then(() => {
              this.loading = false;
              this.$router.push({ path: "/" });
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          console.log("error submit!!");
          this.loading = false;
          return false;
        }
      });
    }
  }
};
</script>
<style lang="scss">
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus {
  transition: background-color 5000s ease-in-out 0s;
}
.login__wrapper {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.login {
  position: relative;
  width: 880px;
  height: 480px;
  margin-bottom: 34px;
  border-radius: 6px;
  background: #fff url("~@/assets/img/login_banner.png") top right no-repeat;
  background-size: contain;
  box-shadow: 0 4px 18px 0 rgba(102, 102, 255, 0.2);

  &:before,
  &:after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 286px;
    height: 342px;
    background-image: url("~@/assets/img/login_bg.png");
    background-size: contain;
  }
  &:before {
    left: 0;
    top: 0;
    transform: scale(0.66) translate3d(-280px, -185px, 0);
  }
  &:after {
    right: 0;
    bottom: -60px;
    transform: scale(0.5) translate(120%, 0);
  }
}

.login__content {
  width: 440px;
  padding: 0 90px;
  color: #333;
  .el-button {
    height: 48px;
    width: 100%;
  }

  h1 {
    margin: 70px 0 0;
    font-size: 24px;
  }
  h2 {
    margin: 8px 0 32px;
    font-size: 20px;
  }
}

.copyright {
  text-align: center;
  font-size: 12px;
  color: #a6a6d1;
  margin: 0 auto;
}
</style>
