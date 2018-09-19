<template>
  <div class="price-import">
    <card>
      <span slot="title">请在下面导入</span>
      <el-form
        ref="form"
        :rules="rules"
        :model="form"
        :label-width="$customConfig.labelWidth">
        <el-row>
          <el-col :span="24">
            <el-form-item
              :label="labels['priceTemplate']"
            >
              <a
                href="/static/oilPriceTemplate.xlsx"
                target="_blank"
                class="text-link">点击下载模板</a>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item
              :label="labels['priceImport']"
              prop="files"
            >
              <el-upload
                :action="uploadUrl"
                :data="{type: 1, id: 0}"
                :multiple="false"
                :limit="1"
                :on-remove="(file, fileList) => handleRemove('others', file, fileList)"
                :on-success="(res, file, fileList) => handleSuccess('others', res, file, fileList)"
                :on-error="handleError"
                :on-exceed="handleExceed"
                :file-list="ui.attachOthers"
                :http-request="$requestForUpload"
                name="files[]">
                <el-button
                  size="small"
                  plain>点击上传</el-button>
                <div
                  slot="tip"
                  class="el-upload__tip">
                  <!--只能上传图片，Excel、word、pdf，压缩包格式文件，文件不能超过30M-->
                </div>
              </el-upload>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </card>
  </div>
</template>

<script>
import { delFile } from "@/api/common/file";
export default {
  name: "PriceImport",
  data() {
    const labels = {
      priceTemplate: "价格模板",
      priceImport: "价格导入"
    };
    return {
      labels,
      form: {
        files: []
      },
      rules: {
        files: {
          required: true,
          message: $verify.getErrorMessage("requiredUpload"),
          trigger: "change"
        }
      },
      ui: {
        attachOthers: []
      },
      uploadUrl: "/webAPI/oilPriceApply/saveFile",
      getFileUrl: "/webAPI/oilPriceApply/getFile",
      delFileUrl: "/webAPI/oilPriceApply/delFile"
    };
  },
  watch: {
    form: {
      handler: function(val) {
        this.$store.dispatch("price-import-create:update-form", {
          form: val,
          formRef: this.$refs["form"]
        });
      },
      immediate: true,
      deep: true
    }
  },
  created() {
    if (this.$route.query.applyId) {
      this.$store.dispatch("price-import-detail:fetch-form").then(detail => {
        this.form = detail;
        this.initFiles();
        this.$nextTick(function() {
          this.$refs.form.clearValidate();
        });
      });
    }
  },
  mounted() {
    this.$store.dispatch("price-import-create:update-form", {
      form: this.form,
      formRef: this.$refs["form"]
    });
  },
  methods: {
    initFiles() {
      function filterFiles(files, name) {
        const type = {
          others: 1
        };
        return files.filter(file => file.type == type[name]).map(file => ({
          name: file.name,
          url: file.url,
          id: file.id,
          type: type[name]
        }));
      }

      if (!Array.isArray(this.form.files)) return [];
      const attachOthers = filterFiles(this.form.files, "others");
      this.ui.attachOthers = attachOthers;
    },
    cacheFiles(type, fileList) {
      const map = {
        others: "attachOthers"
      };
      this.ui[map[type]] = fileList.map(
        file => (file.response ? file.response.data : file)
      );
    },
    handleRemove(type, file, fileList) {
      delFile(this.delFileUrl, file.id)
        .then(() => {
          this.cacheFiles(type, fileList);
          this.addToForm(type, fileList);
        })
        .catch(() => {
          fileList.push(file);
          fileList.sort((a, b) => a.uid > b.uid);
        });
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
      if (type === "others") {
        this.form.files = [...curFiles];
      }
    },
    handleExceed() {
      this.$message.warning("一次仅能上传一个文件");
    }
  }
};
</script>
