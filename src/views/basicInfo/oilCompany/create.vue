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
              :label="labels['name']"
              prop="name"
            >
              <el-input v-model="form.name"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item
              :label="labels['shortName']"
              prop="shortName"
            >
              <el-input v-model="form.shortName"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="$customConfig.colGutter">
          <el-col :span="12">
            <el-form-item
              :label="labels['taxCode']"
              prop="taxCode"
            >
              <el-input v-model="form.taxCode"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item
              :label="labels['corporate']"
            >
              <el-input v-model="form.corporate"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="$customConfig.colGutter">
          <el-col :span="12">
            <el-form-item
              :label="labels['address']"
            >
              <el-input v-model="form.address"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item
              :label="labels['contactPhone']"
              prop="contactPhone"
            >
              <el-input v-model="form.contactPhone"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="$customConfig.colGutter">
          <el-col :span="12">
            <el-form-item
              :label="labels['status']"
              prop="status"
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
              :label="labels['ownership']"
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
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="$customConfig.colGutter">
          <el-col :span="12">
            <el-form-item
              :label="labels['buildDate']"
            >
              <el-date-picker
                v-model="form.buildDate"
                class="form-control"
                type="date"
                placeholder="选择日期"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item
              :label="labels['remark']"
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
      remark: "备注"
    };
    return {
      labels,
      rules: {
        name: [
          {
            required: true,
            message: $verify.getErrorMessage("required", labels.name)
          }
        ],
        shortName: [
          {
            required: true,
            message: $verify.getErrorMessage("required", labels.shortName)
          }
        ],
        taxCode: [
          {
            required: true,
            message: $verify.getErrorMessage("required", labels.taxCode)
          }
        ],
        status: [
          {
            required: true,
            message: $verify.getErrorMessage("requiredSelect", labels.status)
          }
        ],
        contactPhone: [{ validator: $verify.getValidator("phone") }]
      },
      form: {},
      ui: {
        statusOptions: [
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
