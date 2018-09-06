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
                list: [
                    {
                        label:'企业名称',
                        val:'XXXX有限公司'
                    },
                    {
                        label:'企业名称',
                        val:'XXXX有限公司'
                    },
                    {
                        label:'企业名称',
                        val:'XXXX有限公司'
                    }
                ]
            }
        }
    }
}
</script>

