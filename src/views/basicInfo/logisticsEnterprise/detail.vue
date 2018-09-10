<template>
<card>
    <item-list :com-data="itemList"></item-list>
</card>
</template>
<script>
export default {
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
    props: ['comData'],
    mounted(){
        this.itemList.data = this.comData
        console.log(this.itemList.data)
    },
    watch:{
        comData: {
            handler:function(val){
                console.log(val)
            },
            deep:true
        }
    }
}
</script>

