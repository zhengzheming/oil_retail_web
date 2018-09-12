<template>
  <div class="role-auth">
    <card>
      <el-row :gutter="$customConfig.colGutter">
        <el-col :span="24">
          <form-control-static
            :text="form.username"
            title="用户名"/>
        </el-col>
      </el-row>
      <auth-tree 
        :read-only="false" 
        type="user"/>
    </card>
  </div>
</template>

<script>
export default {
  name: "UserAuth",
  data() {
    return {
      form: {
        username: ""
      }
    };
  },
  created() {
    this.$store.dispatch("system-user-detail:fetch-form").then(detail => {
      this.form = detail;
    });
  }
};
</script>
