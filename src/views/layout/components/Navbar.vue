<template>
  <section class="navbar">
    <i
      class="icon icon-menu-unfold"
      style="cursor: pointer; font-size: 20px;"
      @click="toggleSideCollaspe"/>
    <div class="right">
      <div class="user">
        <el-dropdown
          trigger="click"
          @command="handleUserCommand">
          <span class="el-dropdown-link">
            <img
              class="avatar el-icon--left"
              src="~@/assets/img/default_header.png"
              alt="avatar">
            <span>{{ username }}</span>
            <i class="el-icon-arrow-down el-icon--right"/>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="reset-pwd">
              <span>修改密码</span>
            </el-dropdown-item>
            <el-dropdown-item command="logout">
              <span>退出</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    username() {
      return this.$store.getters.name;
    }
  },
  methods: {
    toggleSideCollaspe() {
      this.$store.dispatch("toggleSideBar");
    },
    handleUserCommand(command) {
      const commandCallbacks = {
        "reset-pwd": () => {
          this.$router.push({ name: "reset-pwd" });
          console.log(`reset---pwd...`);
        },
        logout: () => {
          this.$store.dispatch("LogOut");
        }
      };
      const cb = commandCallbacks[command] || function() {};
      cb();
    }
  }
};
</script>

<style scoped lang="scss">
@import "~@/styles/mixin.scss";
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(51, 51, 51, 0.15);
}
.right {
  display: flex;
  align-items: center;
  & > * + * {
    margin-left: 20px;
  }
}
.user {
  display: flex;
  margin-top: -1px;
}
.avatar {
  vertical-align: middle;
  width: 20px;
  & ~ * {
    vertical-align: middle;
  }
}
.todo-item {
  @include truncate(100%);
}
.backlog-length {
  font-style: normal;
  position: absolute;
  height: 16px;
  left: 13px;
  top: -10px;
  background-color: #ea332e !important;
  border-radius: 10px;
  line-height: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(0.9);
  color: #fff;
  padding: 0.2em 0.6em 0.3em;
  font-size: 75%;
  font-weight: 700;
  white-space: nowrap;
}
.length-under10 {
  width: 16px;
  border-radius: 50%;
}
</style>
