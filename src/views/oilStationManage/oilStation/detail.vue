<template>
  <card :is-slide="true">
    <span slot="title">油站详情</span>
    <el-row :gutter="$customConfig.colGutter">
      <el-col :span="12">
        <form-control-static
          :text="form.name"
          :title="labels.name"/>
      </el-col>
      <el-col :span="12">
        <form-control-static
          :text="form.companyName"
          :title="labels.companyId"/>
      </el-col>
    </el-row>
    <el-row :gutter="$customConfig.colGutter">
      <el-col :span="12">
        <form-control-static
          :text="city"
          :title="labels.city"/>
      </el-col>
      <el-col :span="12">
        <form-control-static
          :text="form.address"
          :title="labels.address"/>
      </el-col>
    </el-row>
    <el-row :gutter="$customConfig.colGutter">
      <el-col :span="12">
        <form-control-static
          :text="form.contactPerson"
          :title="labels.contactPerson"/>
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
          :text="longitudeAndLatitude"
          :title="labels.longitudeAndLatitude"/>
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
        <div class="form-control--static">
          <span class="form-control--static__title">{{ labels.attachOthers }}</span>
          <div class="form-control--static__text">
            <p
              v-for="(file, index) in attachOthers"
              :key="index">
              <download-link :attachment="file"/>
            </p>
          </div>
        </div>
      </el-col>
    </el-row>
  </card>
</template>

<script>
export default {
  name: "OilStationDetail",
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
      labels
    };
  },
  computed: {
    form() {
      return this.$store.getters.oilStationDetail.form;
    },
    attachOthers() {
      if (!Array.isArray(this.form.files)) return [];
      return this.filterFiles(this.form.files, "others");
    },
    longitudeAndLatitude() {
      if (
        this.form.longitude == this.form.latitude &&
        this.form.latitude == 0
      ) {
        return "";
      }
      return String(this.form.longitude + " / " + this.form.latitude);
    },
    city() {
      return this.form.provinceName + " " + this.form.cityName;
    }
  },
  created() {
    const query = this.$route.query;
    this.init(query);
  },
  activated() {
    const query = this.$store.state.listPage.query;
    this.init(query);
  },
  methods: {
    init(query) {
      if (query.applyId) {
        this.$store.dispatch("oil-station-detail:fetch-form", query.applyId);
      }
      if (query.stationId) {
        this.$store.dispatch(
          "oil-station-checked-detail:fetch-form",
          query.stationId
        );
      }
    },
    filterFiles(files, name) {
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
  }
};
</script>
