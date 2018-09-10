<template>
  <div class="role-auth">
    <card>
      <el-row :gutter="$customConfig.colGutter">
        <el-col :span="24">
          <form-control-static
            :text="roleName"
            title="角色"/>
        </el-col>
      </el-row>
    </card>
  </div>
</template>

<script>
export default {
  name: "RoleAuth",
  data() {
    return {
      roleName: ""
    };
  }
};
</script>
