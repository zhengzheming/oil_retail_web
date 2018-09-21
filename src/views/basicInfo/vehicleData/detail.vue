<template>
  <card :is-slide="true">
    <span slot="title">车辆详情</span>
    <item-list :com-data="detailData"/>
    <div style="display:flex;">
      <label style="display:inline-block;width:120px;color: #666;">行驶证照片:</label>
      <div style="display:flex;">
        <div
          v-for="item of imgList"
          :key="item.file_id"
          class="img-wrap">
          <img
            :src="item.file_url"
            alt="">
          <p @click="enlarge(item.file_url)">点击放大</p>
        </div>
      </div>
    </div>
    <div
      v-show="showBigImg"
      class="big-img-wrap"
      @click="showBigImg=false">
      <div @click.stop="showBigImg=true">
        <i
          class="del"
          @click.stop="showBigImg=false"/>
        <img
          :src="bigImgUrl"
          alt="">
      </div>
    </div>
  </card>
</template>
<script>
import { detail } from "@/api/basicInfo/vehicleData/detail";
export default {
  data() {
    return {
      showBigImg: false,
      bigImgUrl: "",
      detailData: {
        data: {},
        list: [
          {
            label: "物流企业",
            prop: "logistics_name"
          },
          {
            label: "车牌号",
            prop: "number"
          },
          {
            label: "车型",
            prop: "model"
          },
          {
            label: "油箱容量（L）",
            prop: "capacity"
          },
          {
            label: "审核状态",
            prop: "status_name"
          },
          {
            label: "添加时间",
            prop: "add_time"
          },
          {
            label: "添加人",
            prop: "operator"
          },
          {
            label: "行驶证有效期",
            prop: "validDate"
          }
        ]
      },
      imgList: []
    };
  },
  created() {
    if (this.$route.query.vehicle_id) {
      detail(this.$route.query.vehicle_id)
        .then(res => {
          if (res.state === 0) {
            res.data.validDate = res.data.start_date + "~" + res.data.end_date;
            this.detailData.data = $utils.getDeepKey(res, "data");
            this.imgList = $utils.getDeepKey(res, "data.files") || [];
          }
        })
        .catch(() => {});
    }
  },
  activated() {
    if (this.$store.state.listPage.query.vehicle_id) {
      detail(this.$store.state.listPage.query.vehicle_id)
        .then(res => {
          if (res.state === 0) {
            res.data.validDate = res.data.start_date + "~" + res.data.end_date;
            this.detailData.data = $utils.getDeepKey(res, "data");
            this.imgList = $utils.getDeepKey(res, "data.files") || [];
          }
        })
        .catch(() => {});
    }
  },
  methods: {
    enlarge(val) {
      this.showBigImg = true;
      this.bigImgUrl = val;
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.img-wrap {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  margin-right: 24px;
  & > img {
    width: 80px;
    height: 80px;
  }
  &:hover > p {
    display: block;
  }
  & > p {
    display: none;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background: rgba(0, 0, 0, 0.7);
    cursor: pointer;
    color: #fff;
  }
}
.big-img-wrap {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    position: relative;
    padding: 40px;
    background-color: #fff;
    i.del {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 30px;
      height: 30px;
      cursor: pointer;
      &:before,
      &:after {
        position: absolute;
        top: 14px;
        left: 7px;
        display: inline-block;
        transform: rotate(45deg);
        content: "";
        width: 14px;
        height: 2px;
        background-color: #666;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
      }
      &:after {
        transform: rotate(135deg);
      }
    }
    img {
      max-width: 600px;
    }
  }
}
</style>
