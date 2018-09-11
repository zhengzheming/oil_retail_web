<template>
    <card>
        <item-list :com-data="detailData"></item-list>
    </card>
</template>
<script>
import {detail}  from '@/api/basicInfo/vehicleData/detail'
export default {
    data(){
        return {
            detailData: {
                data:{},
                list:[
                    {
                        label:'物流企业',
                        prop:'name'
                    },
                    {
                        label:'车牌号',
                        prop:'number'
                    },
                    {
                        label:'车型',
                        prop:'model'
                    },
                    {
                        label:'油箱容量（L）',
                        prop:'capacity'
                    },
                    {
                        label:'审核状态',
                        prop:'status_name'
                    },
                    {
                        label:'添加时间',
                        prop:'add_time'
                    },
                    {
                        label:'添加人',
                        prop:'operator'
                    },
                    {
                        label:'行驶证有效期',
                        prop:''
                    },
                    {
                        label:'行驶证照片',
                        prop:'files'
                    }
                ]
            }
        }
    },
    mounted(){
        if(this.$route.query.vehicle_id){
            detail(this.$route.query.vehicle_id)
            .then(res => {
                if(res.data === 0) {
                     this.detailData.data = $utils.getDeepKey(res,'data.data')
                }  
            })
            .catch(err => {
            })
        }
    }
}
</script>

