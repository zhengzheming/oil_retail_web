<template>
  <card>
    <span slot="title">油品详情</span>
    <el-row :gutter="$customConfig.colGutter">
      <el-col :span="12">
        <form-control-static
          :text="form.name"
          :title="labels.name"/>
      </el-col>
    </el-row>
    <el-row :gutter="$customConfig.colGutter">
      <el-col :span="12">
        <form-control-static
          :text="form.orderIndex"
          :title="labels.orderIndex"/>
      </el-col>
    </el-row>
    <el-row :gutter="$customConfig.colGutter">
      <el-col :span="12">
        <form-control-static
          :text="$lookupInDict($route, 'status', form.status)"
          :title="labels.status"/>
      </el-col>
    </el-row>
    <el-row :gutter="$customConfig.colGutter">
      <el-col :span="24">
        <form-control-static
          :text="form.remark"
          :title="labels.remark"/>
      </el-col>
    </el-row>
  </card>
</template>

<script>
export default {
  name: "OilGoodsDetail",
  data() {
    const labels = {
      name: "名称",
      orderIndex: "排序号",
      status: "状态",
      remark: "备注"
    };
    return {
      labels
    };
  },
  computed: {
    form() {
      return this.$store.getters.oilGoodsDetail.form;
    }
  },
  created() {
    this.$store.dispatch("oil-goods-detail:fetch-form");
  }
};
</script>
