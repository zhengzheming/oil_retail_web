<template>
  <card>
    <span slot="title">油企详情</span>
    <el-row :gutter="$customConfig.colGutter">
      <el-col :span="12">
        <form-control-static
          :text="form.name"
          :title="labels.name"/>
      </el-col>
      <el-col :span="12">
        <form-control-static
          :text="form.shortName"
          :title="labels.shortName"/>
      </el-col>
    </el-row>
    <el-row :gutter="$customConfig.colGutter">
      <el-col :span="12">
        <form-control-static
          :text="form.taxCode"
          :title="labels.taxCode"/>
      </el-col>
      <el-col :span="12">
        <form-control-static
          :text="form.corporate"
          :title="labels.corporate"/>
      </el-col>
    </el-row>
    <el-row :gutter="$customConfig.colGutter">
      <el-col :span="12">
        <form-control-static
          :text="form.address"
          :title="labels.address"/>
      </el-col>
      <el-col :span="12">
        <form-control-static
          :text="form.contactPhone"
          :title="labels.contactPhone"/>
      </el-col>
    </el-row>
    <el-row :gutter="$customConfig.colGutter">
      <el-col :span="12">
        <form-control-static
          :text="$lookupInDict($route, 'status', form.status)"
          :title="labels.status"/>
      </el-col>
      <el-col :span="12">
        <form-control-static
          :text="$lookupInDict($route, 'ownership', form.ownership)"
          :title="labels.ownership"/>
      </el-col>
    </el-row>
    <el-row :gutter="$customConfig.colGutter">
      <el-col :span="12">
        <form-control-static
          :text="form.buildDate"
          :title="labels.buildDate"/>
      </el-col>
    </el-row>
    <el-row :gutter="$customConfig.colGutter">
      <el-col :span="24">
        <form-control-static
          :text="form.remark"
          :title="labels.remark"/>
      </el-col>
    </el-row>
    <el-row :gutter="$customConfig.colGutter">
      <el-col :span="24">
        <form-control-static
          :title="labels.attachPaperwork">
          <p
            v-for="(file, index) in attachPaperwork"
            :key="index">
            <download-link :attachment="file"/>
          </p>
        </form-control-static>
      </el-col>
    </el-row>
    <el-row :gutter="$customConfig.colGutter">
      <el-col :span="24">
        <form-control-static
          :title="labels.attachOthers">
          <p
            v-for="(file, index) in attachOthers"
            :key="index">
            <download-link :attachment="file"/>
          </p>
        </form-control-static>
      </el-col>
    </el-row>
  </card>
</template>

<script>
export default {
  name: "OilCompanyDetail",
  data() {
    const labels = {
      name: "企业名称",
      shortName: "企业简称",
      taxCode: "纳税人识别号",
      corporate: "法人代表",
      address: "地址",
      contactPhone: "联系电话",
      status: "企业状态",
      ownership: "企业所有制",
      buildDate: "成立日期",
      remark: "备注",
      attachPaperwork: "证书附件",
      attachOthers: "其他附件"
    };
    return {
      labels
    };
  },
  computed: {
    form() {
      return this.$store.getters.oilCompanyDetail.form;
    },
    attachPaperwork() {
      if (!Array.isArray(this.form.files)) return [];
      return this.filterFiles(this.form.files, "paperwork");
    },
    attachOthers() {
      if (!Array.isArray(this.form.files)) return [];
      return this.filterFiles(this.form.files, "others");
    }
  },
  created() {
    this.$store.dispatch("oil-company-detail:fetch-form");
  },
  methods: {
    filterFiles(files, name) {
      const type = {
        paperwork: 2,
        others: 1
      };
      return files.filter(file => file.type == type[name]).map(file => ({
        name: file.name,
        url: file.url,
        id: file.id,
        type: type[name]
      }));
    }
  }
};
</script>
