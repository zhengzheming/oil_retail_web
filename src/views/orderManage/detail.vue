<template>
  <card>
    <span slot="title">订单详情</span>
    <el-row :gutter="$customConfig.colGutter">
      <el-col :span="12">
        <form-control-static
          :text="form.createTime"
          :title="labels.createTime"/>
      </el-col>
      <el-col :span="12">
        <form-control-static
          :text="form.effectTime"
          :title="labels.effectTime"/>
      </el-col>
    </el-row>
    <el-row :gutter="$customConfig.colGutter">
      <el-col :span="12">
        <form-control-static
          :text="form.code"
          :title="labels.code"/>
      </el-col>
      <el-col :span="12">
        <form-control-static
          :text="$lookupInDict($route, 'status', form.status)"
          :title="labels.status"/>
      </el-col>
    </el-row>
    <el-row
      v-if="form.failedReason"
      :gutter="$customConfig.colGutter">
      <el-col :span="12">
        <form-control-static
          :text="form.failedReason"
          :title="labels.failedReason"/>
      </el-col>
    </el-row>
    <el-row :gutter="$customConfig.colGutter">
      <el-col :span="12">
        <form-control-static
          :text="goods.name"
          :title="labels.goodsName"/>
      </el-col>
      <el-col :span="12">
        <form-control-static
          :text="form.sellAmount | formatPrice('元')"
          :title="labels.sellAmount"/>
      </el-col>
    </el-row>
    <el-row :gutter="$customConfig.colGutter">
      <el-col :span="12">
        <form-control-static
          :text="`${form.quantity} 升`"
          :title="labels.quantity"/>
      </el-col>
      <el-col :span="12">
        <form-control-static
          :text="form.retailPrice | formatPrice('元/升')"
          :title="labels.retailPrice"/>
      </el-col>
    </el-row>
    <el-row :gutter="$customConfig.colGutter">
      <el-col :span="12">
        <form-control-static
          :text="form.discountPrice | formatPrice('元/升')"
          :title="labels.discountPrice"/>
      </el-col>
      <el-col :span="12">
        <form-control-static
          :text="form.agreedPrice | formatPrice('元/升')"
          :title="labels.agreedPrice"/>
      </el-col>
    </el-row>
    <el-row :gutter="$customConfig.colGutter">
      <el-col :span="12">
        <form-control-static
          :text="customer.name"
          :title="labels.customerName"/>
      </el-col>
      <el-col :span="12">
        <form-control-static
          :text="customer.phone"
          :title="labels.customerPhone"/>
      </el-col>
    </el-row>
    <el-row :gutter="$customConfig.colGutter">
      <el-col :span="12">
        <form-control-static
          :text="vehicle.number"
          :title="labels.vehicleNum"/>
      </el-col>
      <el-col :span="12">
        <form-control-static
          :text="vehicle.model"
          :title="labels.vehicleModel"/>
      </el-col>
    </el-row>
    <el-row :gutter="$customConfig.colGutter">
      <el-col :span="12">
        <form-control-static
          :text="logistics.name"
          :title="labels.logisticsName"/>
      </el-col>
    </el-row>
    <el-row :gutter="$customConfig.colGutter">
      <el-col :span="12">
        <form-control-static
          :text="oilStation.name"
          :title="labels.oilStationName"/>
      </el-col>
      <el-col :span="12">
        <form-control-static
          :text="oilStation.address"
          :title="labels.oilStationAddress"/>
      </el-col>
    </el-row>
  </card>
</template>

<script>
import { formatPrice } from "@/filters/index";
export default {
  name: "OrderDetail",
  filters: {
    formatPrice
  },
  data() {
    const labels = {
      code: "订单编号",
      status: "订单状态",
      goodsName: "油品",
      sellAmount: "油品总价",
      quantity: "升数",
      retailPrice: "零售单价",
      discountPrice: "优惠单价",
      agreedPrice: "协议单价",
      customerName: "司机姓名",
      customerPhone: "手机号码",
      vehicleNum: "车牌号",
      vehicleModel: "车型",
      logisticsName: "物流公司",
      oilStationName: "加油站名称",
      oilStationAddress: "加油站地址",
      createTime: "订单交易日期",
      effectTime: "订单生效日期",
      failedReason: "失败原因"
    };
    return {
      labels
    };
  },
  computed: {
    form() {
      return this.$store.getters.orderDetail.form;
    },
    goods() {
      return this.form.goods || {};
    },
    customer() {
      return this.form.customer || {};
    },
    logistics() {
      return this.form.logistics || {};
    },
    vehicle() {
      return this.form.vehicle || {};
    },
    oilStation() {
      return this.form.oilStation || {};
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
      if (query.orderId) {
        this.$store.dispatch("order-detail:fetch-form", query.orderId);
      }
    }
  }
};
</script>
