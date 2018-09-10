<template>
<card>
    <item-list :com-data="itemList"></item-list>
    <div>
        <label style="color:#333;font-size:14px;">企业状态：</label>
        <el-select v-model="statuVal" placeholder="请选择">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
    </div>
</card>
</template>
<script>
import {detail}  from '@/api/basicInfo/logisticsEnterprise/detail'
import {save}  from '@/api/basicInfo/logisticsEnterprise/edit'
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
                        prop:'out_status_name	'
                    }
                ]
            },
            options:[
                {
                    label:'启用',
                    value:'1'
                },
                {
                    label:'禁用',
                    value:'0'
                }
            ]
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
                this.itemList.data = $utils.getDeepKey(res,'data.data')
                this.statuVal = $utils.getDeepKey(res,'data.data.status')
            })
        }
    }
}
</script>

