<template>
<card>
    <item-list :com-data="itemList"></item-list>
</card>
</template>
<script>
import {detail}  from '@/api/basicInfo/logisticsEnterprise/detail'
export default{
    data(){
        return {
            itemList: {
                data:{},
                list: [
                    {
                        label:'企业名称',
                        prop:'name'
                    },
                    {
                        label:'银管家状态',
                        prop:'out_status_name	'
                    },
                    {
                        label:'企业状态',
                        prop:'status_name'
                    }
                ]
            }
        }
    },
    mounted(){
        if(this.$route.query.logistics_id){
            detail(this.$route.query.logistics_id)
            .then(res => {
                if(res.data === 0) {
                     this.itemList.data = $utils.getDeepKey(res,'data.data')
                }  
            })
            .catch(err => {
                let res = {
                    "state": 0,
                    "data": {
                        "search": null,
                        "data": {
                            "logistics_id": "1392",
                            "out_status_name": "禁用",
                            "name": "朝阳物流有限公司",
                            "status_name": "正常",
                            "status": "1",
                            "is_can_edit": false,
                        }
                    }
                }
                this.itemList.data = res.data.data
            })
        }
    }
}
</script>

