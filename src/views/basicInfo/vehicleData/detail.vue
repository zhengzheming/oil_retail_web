<template>
    <card>
        <item-list :com-data="detailData"></item-list>
        <div style="display:flex;">
            <label style="display:inline-block;width:120px;">行驶证照片:</label>
            <div style="display:flex;">
                <div class="img-wrap" v-for="item of imgList" :key="item.file_id">
                    <img :src="item.file_url" alt="">
                </div>
            </div>
        </div>
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
                        prop:'logistics_name'
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
                        prop:'validDate'
                    }
                ]
            },
            imgList:[]
        }
    },
    mounted(){
        if(this.$route.query.vehicle_id){
            detail(this.$route.query.vehicle_id)
            .then(res => {
                if(res.state === 0) {
                    res.data.validDate = res.data.start_date + '~' + res.data.end_date;
                    this.detailData.data = $utils.getDeepKey(res,'data')
                    this.imgList = $utils.getDeepKey(res,'data.files') || []
                }  
            })
            .catch(err => {
            })
        }
    }
}
</script>

<style>
.img-wrap{
    display: flex;
    justify-content: center;
    align-items: center;
    width:100px;
    height:100px;
    border:1px solid #e6e6e6;
    border-radius:4px;
    margin-right:24px;
}
.img-wrap>img{
     width:80px;
     height:80px;
}
</style>
