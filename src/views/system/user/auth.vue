<template>
  <div class="role-auth">
    <card>
      <el-row :gutter="$customConfig.colGutter">
        <el-col :span="24">
          <form-control-static
            :text="username"
            title="用户名"/>
        </el-col>
      </el-row>
    </card>
  </div>
</template>

<script>
export default {
  name: "UserAuth",
  data() {
    return {
      username: ""
    };
  }
};
</script>
