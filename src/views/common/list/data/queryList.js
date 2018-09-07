export default {
    // 基础数据-物流企业
    'logistics': [
        {
            label:'企业名称',
            val:''
        },
        {
            type:'slt',
            label:"企业状态",
            val:'',
            data: [
            {
                label:'aaa',
                val:'1'
            },
            {
                label:'bbb',
                val:'2'
            },
            {
                label:'ccc',
                val:'3'
            }
            ]
        },
        {
            type:'slt',
            label:"银管家状态",
            val:'',
            data: [
            {
                label:'aaa',
                val:'1'
            },
            {
                label:'bbb',
                val:'2'
            },
            {
                label:'ccc',
                val:'3'
            }
            ]
        }
    ],
    // 物流企业管理-企业额度
    'enterprise-quota' : [
        {
            label:'物流公司',
            val:''
        },
        {
            type:'slt',
            label:"额度状态",
            val:'',
            data: [
            {
                label:'aaa',
                val:'1'
            },
            {
                label:'bbb',
                val:'2'
            },
            {
                label:'ccc',
                val:'3'
            }
            ]
        },
    ],
    // 物流企业管理-企业可用额度收支管理
    'available-credit' : [
        {
            type:'slt',
            label:"收支类型",
            val:'',
            data: [
            {
                label:'aaa',
                val:'1'
            },
            {
                label:'bbb',
                val:'2'
            },
            {
                label:'ccc',
                val:'3'
            }
            ]
        },
        {
            type:'date',
            label:"开始时间",
            val:'',
        },
        {
            type:'date',
            label:"结束时间",
            val:'',
        },
    ]
}