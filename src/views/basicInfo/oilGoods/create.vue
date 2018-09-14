<template>
  <div class="oil-goods__create">
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
      name: "名称",
      orderIndex: "排序号",
      status: "状态",
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
        orderIndex: [
          {
            validator: $verify.getValidator("posInt"),
            message: $verify.getErrorMessage("posInt", labels.orderIndex)
          }
        ],
        status: [
          {
            required: true,
            message: $verify.getErrorMessage("requiredSelect", labels.status)
          }
        ]
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
        ]
      }
    };
  },
  watch: {
    form: {
      handler: function(val) {
        this.$store.dispatch("oil-goods-create:update-form", {
          form: val,
          formRef: this.$refs["form"]
        });
      },
      immediate: true,
      deep: true
    }
  },
  created() {
    this.initFiles();
    if (this.$route.query.companyId) {
      this.$store.dispatch("oil-goods-detail:fetch-form").then(detail => {
        this.form = detail;
        if (!this.form.roles) this.form.roles = [];
        this.$nextTick(function() {
          this.$refs.form.clearValidate();
        });
      });
    }
  },
  mounted() {
    this.$store.dispatch("oil-goods-create:update-form", {
      form: this.form,
      formRef: this.$refs["form"]
    });
  },
  methods: {
    initFiles() {
      function filterFiles(files, name) {
        const type = {
          paperwork: 2,
          others: 1
        };
        return files.filter(file => file.type == type[name]).map(file => ({
          name: file.name,
          url: file.url,
          type: type[name]
        }));
      }

      if (!Array.isArray(this.form.files)) return [];
      const attachPaperwork = filterFiles(this.form.files, "paperwork");
      const attachOthers = filterFiles(this.form.files, "others");
      this.ui.attachPaperwork = attachPaperwork;
      this.ui.attachOthers = attachOthers;
    },
    cacheFiles(type, fileList) {
      const map = {
        paperwork: "attachPaperwork",
        others: "attachOthers"
      };
      this.ui[map[type]] = fileList.map(
        file => (file.response ? file.response.data : file)
      );
    },
    handleRemove(type, file, fileList) {
      this.cacheFiles(type, fileList);
      this.addToForm(type, fileList);
    },
    handleSuccess(type, res, file, fileList) {
      if (res.state != 0) {
        fileList.pop();
        return this.handleError(res.data);
      }
      this.cacheFiles(type, fileList);
      this.addToForm(type, fileList);
    },
    handleError(err) {
      const message = err ? `上传失败: ${err}` : "上传失败";
      this.$message.error(message);
    },
    addToForm(type, fileList) {
      const curFiles = fileList.map(
        file => (file.response ? file.response.data : file)
      );
      if (type === "paperwork") {
        this.form.files = [...curFiles, ...this.ui.attachOthers];
      }
      if (type === "others") {
        this.form.files = [...curFiles, ...this.ui.attachPaperwork];
      }
    }
  }
};
</script>
