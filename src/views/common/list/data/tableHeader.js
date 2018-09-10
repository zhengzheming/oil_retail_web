export default {
    // 基础数据-物流企业
    'logistics': {
      'logistics_id':{
        label:'编号',
        width:'120',
      },
      'name':{
        label:'企业名称',
        url:'11111',
        pathName:'enterprise-quota',
        // query:[{
        //   name:'id',             //参数key
        //   field:'out_status'     //参数value所对应的后台字段
        // }]
      },
      'out_status_name':{
        label:'银管家状态',
        width:'120'
      },
      'status_name':{
        label:'企业状态',
        width:'120'
      },
    },
    // 物流企业管理-企业额度
    'enterprise-quota': {
      logistics_id: {
        label:'物流公司',
        width:'120'
      },
      name:{
        label:'额度状态',
        width:'200'
      },
      out_status_name:{
        label:'企业额度',
        width:'120'
      },
      status_name:{
        label:'企业可用额度',
      },
      logistics_id:{
        label:'每日额度占比',
        width:'120'
      },
      name:{
        label:'每日企业额度',
        width:'200'
      },
      out_status_name:{
        label:'今日可用额度',
        width:'120'
      },
      status_name:{
        label:'开始时间',
      },
      status_name:{
        label:'结束时间'
      }
    },
    // 物流企业管理-企业可用额度收支管理
    'available-credit': {
      logistics_id:{
        label:'时间',
        width:'120'
      },
      name:{
        label:'额度明细/元',
        width:'200'
      },
      out_status_name:{
        label:'编号',
        width:'120'
      },
      status_name:{
        label:'收支类型'
      }
    },
    // 物流企业管理-企业当日可用额度收支管理
    'day-credit': {
      logistics_id:{
        label:'时间',
        width:'120'
      },
      name:{
        label:'额度明细/元',
        width:'200'
      },
      out_status_name:{
        label:'编号',
        width:'120'
      },
      status_name:{
        label:'收支类型'
      }
    },
}