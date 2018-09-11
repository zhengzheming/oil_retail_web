<template>
  <card>
    <span slot="title">用户详情</span>
    <el-row :gutter="$customConfig.colGutter">
      <el-col :span="12">
        <form-control-static
          :text="form.realName"
          title="姓名"/>
      </el-col>
      <el-col :span="12">
        <form-control-static
          :text="form.username"
          title="用户名"/>
      </el-col>
    </el-row>
    <el-row :gutter="$customConfig.colGutter">
      <el-col :span="12">
        <form-control-static
          :text="form.mainRoleName"
          title="主角色"/>
      </el-col>
      <el-col :span="12">
        <div class="form-control--static">
          <span class="form-control--static__title">从角色</span>
          <span class="form-control--static__text" >
            <span
              v-for="(role, index) in form.roleObjs"
              :key="index">{{ role.name }} </span>
          </span>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="$customConfig.colGutter">
      <el-col :span="12">
        <form-control-static
          :text="form.phone"
          title="手机号"/>
      </el-col>
      <el-col :span="12">
        <form-control-static
          :text="$lookupInDict($route, 'status', form.status)"
          title="状态"/>
      </el-col>
    </el-row>
    <el-row :gutter="$customConfig.colGutter">
      <el-col :span="24">
        <form-control-static
          :text="form.email"
          title="E-mail"/>
      </el-col>
    </el-row>
  </card>
</template>

<script>
export default {
  name: "SystemUserDetail",
  computed: {
    form() {
      return this.$store.getters.systemUserDetail.form;
    }
  },
  mounted() {
    this.$store.dispatch("system-user-detail:fetch-form");
  }
};
</script>
