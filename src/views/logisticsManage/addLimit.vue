<template>
<div>
    <card>
        <span slot="title">当前额度信息</span>
        <item-list :com-data="currentInfo"></item-list>
    </card>
    <card>
        <span slot="title">新增额度信息</span>
        <p style="line-height: 32px;">{{text1}}当日可用额度：  不超过{{text2}}容量<el-input style="width:100px;margin:0 5px;display:inline-block;" type="text" v-model="val"/>%</p>
    </card>
</div>
</template>

<script>
import {logisticsQuotaLimit,vehicleQuotaLimit} from '@/api/logisticsManage/limitQuota'
export default {
    data(){
        const textMap1 = {
            enterpriseDayQuotaAdd:'企业',
            vehicleDayQuotaAdd:'车辆'
        };
        const textMap2 = {
            enterpriseDayQuotaAdd:'企业',
            vehicleDayQuotaAdd:'车辆油箱'
        };
        return {
            val:0,
            text1:textMap1[this.$route.name],
            text2:textMap2[this.$route.name],
            currentInfo: {
                data:{},
                list:[],
                styleObj:'width:100%;'
            }
        }
    },
    watch:{
        'val':function(newVal){
            this.$store.dispatch(`${this.$route.name}:update`,newVal)
        }
    },
    mounted(){
        this.currentInfo.list = [
            {
                label:`${this.text1}当日可用额度`,
                prop:'rate'
            },
            {
                label:'上次变更时间',
                prop:'create_time'
            }
        ]
        this.$store.dispatch(`${this.$route.name}:update`,this.val)
        const apiMap = {
            enterpriseDayQuotaAdd:logisticsQuotaLimit,
            vehicleDayQuotaAdd:vehicleQuotaLimit
        };
        apiMap[this.$route.name]()
        .then(res => {
            if(res.data && res.data.rate){
                this.val = (Number(res.data.rate)*100).toFixed(2);
                res.data.rate = (Number(res.data.rate)*100).toFixed(2) + '%';
            }
            this.currentInfo.data = res.data || {}
        })
    }
}
</script>

