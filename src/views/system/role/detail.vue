<template>
  <card>
    <span slot="title">角色详情</span>
    <el-row :gutter="$customConfig.colGutter">
      <el-col :span="12">
        <form-control-static
          :text="form.roleNme"
          title="角色名"/>
      </el-col>
      <el-col :span="12">
        <form-control-static
          :text="form.updateTime"
          title="更新时间"/>
      </el-col>
    </el-row>
    <el-row :gutter="$customConfig.colGutter">
      <el-col :span="24">
        <form-control-static
          :text="form.remark"
          title="备注"/>
      </el-col>
    </el-row>
    <auth-tree/>
  </card>
</template>

<script>
export default {
  name: "SystemUserDetail",
  computed: {
    form() {
      return this.$store.getters.systemRoleDetail.form;
    }
  },
  mounted() {
    this.$store.dispatch("system-role-detail:fetch-form");
  }
};
</script>
