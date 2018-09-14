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
        </el-row>
        <el-row :gutter="$customConfig.colGutter">
          <el-col :span="12">
            <el-form-item
              :label="labels['sort']"
              prop="sort"
            >
              <el-input v-model="form.sort"/>
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
      sort: "排序号",
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
        sort: [
          {
            validator: $verify.getValidator("posInt"),
            message: $verify.getErrorMessage("posInt", labels.sort)
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
    if (this.$route.query.goodsId) {
      this.$store.dispatch("oil-goods-detail:fetch-form").then(detail => {
        this.form = detail;
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
  }
};
</script>
