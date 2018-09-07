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
          :text="form.realName" 
          title="主角色"/>
      </el-col>
      <el-col :span="12">
        <form-control-static 
          :text="form.username" 
          title="从角色"/>
      </el-col>
    </el-row>
    <el-row :gutter="$customConfig.colGutter">
      <el-col :span="12">
        <form-control-static 
          :text="form.realName" 
          title="手机号"/>
      </el-col>
      <el-col :span="12">
        <form-control-static 
          :text="form.username" 
          title="状态"/>
      </el-col>
    </el-row>
    <el-row :gutter="$customConfig.colGutter">
      <el-col :span="24">
        <form-control-static 
          :text="form.realName" 
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
