<template>
  <div class="oil-station__create">
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
              :label="labels['companyId']"
              prop="companyId"
            >
              <el-select
                v-model="form.companyId"
                class="form-control"
                placeholder="请选择">
                <el-option
                  v-for="item in ui.companyOptions"
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
              :label="labels['city']"
              required
            >
              <cell-grid-controls>
                <el-form-item
                  slot="control-1"
                  prop="provinceId"
                  class="no-margin_b">
                  <el-select
                    v-model="form.provinceId"
                    class="form-control"
                    placeholder="请选择"
                    @change="$set(form, 'cityId', '')">
                    <el-option
                      v-for="item in provinceOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"/>
                  </el-select>
                </el-form-item>
                <el-form-item
                  slot="control-2"
                  prop="cityId"
                  class="no-margin_b">
                  <el-select
                    v-model="form.cityId"
                    class="form-control"
                    placeholder="请选择">
                    <el-option
                      v-for="item in ui.cityOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"/>
                  </el-select>
                </el-form-item>
              </cell-grid-controls>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="$customConfig.colGutter">
          <el-col :span="12">
            <el-form-item
              :label="labels['address']"
              prop="address"
            >
              <el-input v-model="form.address"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item
              :label="labels['longitudeAndLatitude']"
            >
              <cell-grid-controls>
                <el-form-item
                  slot="control-1"
                  class="no-margin_b">
                  <el-input v-model="form.longitude"/>
                </el-form-item>
                <el-form-item
                  slot="control-2"
                  class="no-margin_b">
                  <el-input v-model="form.latitude"/>
                </el-form-item>
              </cell-grid-controls>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="$customConfig.colGutter">
          <el-col :span="12">
            <el-form-item
              :label="labels['contactPerson']"
            >
              <el-input v-model="form.contactPerson"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item
              :label="labels['contactPhone']"
            >
              <el-input v-model="form.contactPhone"/>
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
        <el-row>
          <el-col :span="24">
            <el-form-item
              :label="labels['attachOthers']"
            >
              <el-upload
                :action="uploadUrl"
                :data="{type: 1, id: 0}"
                :on-remove="(file, fileList) => handleRemove('others', file, fileList)"
                :on-success="(res, file, fileList) => handleSuccess('others', res, file, fileList)"
                :on-error="handleError"
                :file-list="ui.attachOthers"
                multiple
                name="files[]">
                <el-button
                  size="small"
                  plain>点击上传</el-button>
                <div
                  slot="tip"
                  class="el-upload__tip">
                  只能上传图片，Excel、word、pdf，压缩包格式文件，文件不能超过30M
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
export default {
  name: "OilStationCreate",
  data() {
    const labels = {
      name: "油站名称",
      companyId: "所属企业",
      city: "所在城市",
      cityId: "市",
      provinceId: "省份",
      address: "详细地址",
      longitudeAndLatitude: "经纬度",
      contactPerson: "油站联系人",
      contactPhone: "联系方式",
      remark: "备注",
      attachOthers: "附件"
    };
    return {
      labels,
      uploadUrl: "/webAPI/oilStation/saveFile",
      rules: {
        name: [
          {
            required: true,
            message: $verify.getErrorMessage("required", labels.name)
          }
        ],
        companyId: [
          {
            required: true,
            message: $verify.getErrorMessage("required", labels.companyId)
          }
        ],
        provinceId: [
          {
            required: true,
            message: $verify.getErrorMessage(
              "requiredSelect",
              labels.provinceId
            )
          }
        ],
        cityId: [
          {
            required: true,
            message: $verify.getErrorMessage("requiredSelect", labels.cityId)
          }
        ],
        address: [
          {
            required: true,
            message: $verify.getErrorMessage("required", labels.address)
          }
        ]
      },
      form: {
        files: []
      },
      ui: {
        attachOthers: [],
        provinceOptions: [],
        cityOptions: [],
        companyOptions: []
      }
    };
  },
  computed: {
    provinceOptions() {
      return this.$store.state.common.areaList.map(province => ({
        label: province.name,
        value: province.id,
        children: province.children
      }));
    }
  },
  watch: {
    form: {
      handler: function(val) {
        this.$store.dispatch("oil-station-create:update-form", {
          form: val,
          formRef: this.$refs["form"]
        });
      },
      immediate: true,
      deep: true
    },
    "form.provinceId": function(id) {
      const province = this.provinceOptions.find(
        province => id == province.value
      );
      this.ui.cityOptions = province.children.map(child => ({
        label: child.name,
        value: child.id
      }));
    }
  },
  created() {
    this.$store.dispatch("common/getArea");
    this.$store.dispatch("oilCommon/dropdownListMap").then(data => {
      console.log(data);
      this.ui.companyOptions = data["oil_company_id_name_map"].map(obj => ({
        label: obj.value,
        value: obj.id
      }));
    });
    if (this.$route.query.stationId) {
      this.$store.dispatch("oil-station-detail:fetch-form").then(detail => {
        this.form = detail;
        this.initFiles();
        this.$nextTick(function() {
          this.$refs.form.clearValidate();
        });
      });
    }
  },
  mounted() {
    this.$store.dispatch("oil-station-create:update-form", {
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
      if (type === "others") {
        this.form.files = [...curFiles, ...this.ui.attachPaperwork];
      }
    }
  }
};
</script>
