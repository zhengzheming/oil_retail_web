<template>
<card>
    <item-list :com-data="itemList"></item-list>
</card>
</template>
<script>
import {detail}  from '@/api/basicInfo/logisticsEnterprise/detail'
import {save,getMap}  from '@/api/basicInfo/logisticsEnterprise/edit'
export default {
    data(){
        return {
            statuVal:'',
            itemList: {
                data:{},
                list: [
                    {
                        label:'企业名称',
                        prop:'name'
                    },
                    {
                        label:'银管家状态',
                        prop:'out_status_name'
                    },
                    {
                        type:'slt',
                        label:'企业状态',
                        prop:'status',
                        data:[]
                    }
                ]
            }
        }
    },
    watch: {
        itemList: {
            handler: function(val) {
                if(val.data['status']){
                    this.$store.dispatch('logisticsEdit:update-form', {logistics_id:this.$route.query.logistics_id, status:val.data['status']});
                }
            },
            immediate: true,
            deep: true
        }
    },
    mounted(){
        this.$store.dispatch('logisticsEdit:update-form', {logistics_id:this.$route.query.logistics_id, status:this.statuVal});
        if(this.$route.query.logistics_id){
            detail(this.$route.query.logistics_id)
            .then(res => {
                if(res.state === 0) {
                    this.itemList.data = $utils.getDeepKey(res,'data');
                    this.statuVal = $utils.getDeepKey(res,'data.status');
                }  
            })
            .catch(err => {})
        }
        getMap()
        .then(res => {
            if(res.state == 0){
                this.itemList.list[2].data = $utils.getDeepKey(res,'data.logistics_company_status');
            }
        })
    }
}
</script>

