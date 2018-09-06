<template>
<div>
    <item-list :com-data="itemList"></item-list>
</div>
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

