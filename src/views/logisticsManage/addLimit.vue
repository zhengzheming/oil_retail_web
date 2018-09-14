<template>
<div>
    <card>
        <span slot="title">当前额度信息</span>
        <item-list :com-data="currentInfo"></item-list>
    </card>
    <card>
        <span slot="title">新增额度信息</span>
        <p style="line-height: 32px;">车辆当日可用额度：  不超过车辆油箱容量<el-input style="width:100px;margin:0 5px;display:inline-block;" type="text" v-model="val"/>%</p>
    </card>
</div>
</template>

<script>
import {logisticsQuotaLimit,vehicleQuotaLimit} from '@/api/logisticsManage/limitQuota'
export default {
    data(){
        return {
            val:'',
            currentInfo: {
                data:{},
                list:[
                    {
                        label:'车辆当日可用额度',
                        prop:'rate'
                    },
                    {
                        label:'上次变更时间',
                        prop:'create_time'
                    }
                ],
                styleObj:'width:100%;'
            }
        }
    },
    mounted(){
        const apiMap = {
            enterpriseDayQuotaAdd:logisticsQuotaLimit,
            vehicleQuotaLimit:vehicleQuotaLimit
        };
        apiMap[this.$route.name]()
        .then(res => {

        })
    }
}
</script>

