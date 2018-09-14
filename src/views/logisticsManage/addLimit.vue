<template>
<div>
    <card>
        <span slot="title">当前额度信息</span>
        <item-list :com-data="currentInfo"></item-list>
    </card>
    <card>
        <span slot="title">新增额度信息</span>
        <p>车辆当日可用额度：  不超过车辆油箱容量<el-input type="text" v-model="val"/>%</p>
    </card>
</div>
</template>
