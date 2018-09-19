export const queryList = {
  "order-list": [
    {
      label: "交易开始日期",
      type: "date",
      val: ""
    },
    {
      label: "交易结束日期",
      type: "date",
      val: ""
    },
    {
      label: "订单编号",
      val: ""
    },
    {
      label: "车牌号",
      val: ""
    },
    {
      label: "司机姓名",
      val: ""
    },
    {
      label: "手机号码",
      val: ""
    },
    {
      label: "物流公司",
      val: ""
    },
    {
      label: "状态",
      type: "slt",
      val: "",
      field: "order_status",
      data: []
    }
  ]
};

export const tableHeader = {
  "order-list": {
    create_time: {
      label: "订单交易日期",
      width: "170px"
    },
    order_id: {
      label: "订单编号"
    },
    vehicle_number: {
      label: "车牌号"
    },
    customer_phone: {
      label: "手机号码"
    },
    customer_name: {
      label: "司机姓名"
    },
    logistics_name: {
      label: "物流公司"
    },
    goods_name: {
      label: "油品"
    },
    quantity: {
      label: "升数"
    },
    price_sell: {
      label: "优惠单价"
    },
    sell_amount: {
      label: "油品总价"
    },
    status_name: {
      label: "订单状态"
    },
    oil_station_address: {
      label: "加油站地址",
      width: "170px"
    }
  }
};

export const detailPath = {
  "order-list": {
    pathName: "order-detail",
    query: [
      {
        name: "orderId",
        field: "order_id"
      }
    ]
  }
};
