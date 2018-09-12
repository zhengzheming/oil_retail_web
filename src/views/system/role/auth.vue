<template>
  <div class="role-auth">
    <card>
      <el-row :gutter="$customConfig.colGutter">
        <el-col :span="24">
          <form-control-static
            :text="form.roleName"
            title="角色"/>
        </el-col>
      </el-row>
      <auth-tree 
        :read-only="false" 
        type="role"/>
    </card>
  </div>
</template>

<script>
export default {
  name: "RoleAuth",
  data() {
    return {
      form: {
        roleName: ""
      }
    };
  },
  created() {
    this.$store.dispatch("system-role-detail:fetch-form").then(detail => {
      this.form = detail;
    });
  }
};
</script>
