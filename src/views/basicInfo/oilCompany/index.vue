<template>
  <div class="oil-company__create">
    <card>
      <span slot="title">请在下面填写</span>
      <el-form
        ref="form"
        :rules="rules"
        :model="form"
        :label-width="$customConfig.labelWidth">
        <el-row :gutter="$customConfig.colGutter">
          <el-col :span="12">
            <el-form-item
              label="企业名称"
            >
              <el-input v-model="form.name"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item
              label="企业简称"
            >
              <el-input v-model="form.shortName"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="$customConfig.colGutter">
          <el-col :span="12">
            <el-form-item
              label="纳税人识别号"
            >
              <el-input v-model="form.taxCode"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item
              label="法人代表"
            >
              <el-input v-model="form.corporate"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="$customConfig.colGutter">
          <el-col :span="12">
            <el-form-item
              label="地址"
            >
              <el-input v-model="form.address"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item
              label="联系电话"
            >
              <el-input v-model="form.contractPhone"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="$customConfig.colGutter">
          <el-col :span="12">
            <el-form-item
              label="企业状态"
            >
              <el-select
                v-model="form.status"
                class="form-control"
                placeholder="请选择">
                <el-option
                  v-for="item in ui.statusOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"/>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item
              label="企业所有制"
            >
              <el-select
                v-model="form.ownership"
                class="form-control"
                placeholder="请选择">
                <el-option
                  v-for="item in ui.ownershipOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"/>
              </el-select>
              <el-input v-model="form.ownership"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="$customConfig.colGutter">
          <el-col :span="12">
            <el-form-item
              label="成立日期"
            >
              <el-input v-model="form.buildDate"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item
              label="备注"
            >
              <el-input
                :rows="2"
                v-model="form.remark"
                type="textarea"
                placeholder="备注"/>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </card>
  </div>
</template>

<script>
export default {
  name: "OilCompanyCreate",
  data() {
    return {
      rules: {
        name: [{ required: true, message: "请输入企业名称", trigger: "blur" }]
      },
      form: {},
      ui: {
        status: [
          {
            value: "1",
            label: "启用"
          },
          {
            value: "0",
            label: "未启用"
          }
        ],
        ownershipOptions: [
          {
            value: "1",
            label: "国有"
          },
          {
            value: "2",
            label: "民营"
          }
        ]
      }
    };
  },
  watch: {
    form: {
      handler: function(val) {
        this.$store.dispatch("oil-company-create:update-form", {
          form: val,
          formRef: this.$refs["form"]
        });
      },
      immediate: true,
      deep: true
    }
  },
  created() {
    if (this.$route.query.companyId) {
      this.$store.dispatch("oil-company-detail:fetch-form").then(detail => {
        this.form = detail;
        if (!this.form.roles) this.form.roles = [];
        this.$nextTick(function() {
          this.$refs.form.clearValidate();
        });
      });
    }
  },
  mounted() {
    this.$store.dispatch("oil-company-create:update-form", {
      form: this.form,
      formRef: this.$refs["form"]
    });
  }
};
</script>
