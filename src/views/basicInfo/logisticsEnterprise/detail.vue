<template>
<div>
    <item-list :com-data="itemList"></item-list>
    <div>
        <label>企业状态：</label>
        <el-select v-model="value" placeholder="请选择">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return {
            itemList: [
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
</script>

