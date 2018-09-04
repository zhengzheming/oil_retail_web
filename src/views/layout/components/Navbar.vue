<template>
  <section class="navbar">
    <i class="icon icon-menu-unfold"
       @click="toggleSideCollaspe"
       style="cursor: pointer; font-size: 20px;"/>
    <div class="right">
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    toggleSideCollaspe() {
      this.$store.dispatch("toggleSideBar");
    }
  }
};
</script>

<style scoped lang="scss">
@import "~@/styles/mixin.scss";
.el-dropdown-menu__item {
  cursor: default;
  & > a {
    display: block;
    cursor: pointer;
  }
}
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
