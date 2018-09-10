<template>
    <card>
        <span slot="title">系统模块详情</span>
        <item-list :com-data="detailData"></item-list>
    </card>
</template>
<script>
import {detail} from '@/api/system/module'
export default {
    data(){
        return {
            detailData: {
                list: [
                    {
                        label: '名称',
                        val: ''
                    },
                    {
                        label: '权限码',
                        val: ''
                    },
                    {
                        label: '所属系统',
                        val: ''
                    },
                    {
                        label: '排序码',
                        val: ''
                    },
                    {
                        label: '操作',
                        val: ''
                    },
                    {
                        label: '页面链接',
                        val: ''
                    },
                    {
                        label: '是否公开',
                        val: ''
                    },
                    {
                        label: '是否外部链接',
                        val: ''
                    },
                    {
                        label: '状态',
                        val: ''
                    },
                    {
                        label: '更新时间',
                        val: ''
                    },
                    {
                        label: '是否菜单',
                        val: ''
                    },
                    {
                        label: '备注',
                        val: ''
                    }
                ]
            }
        }
    },
    mounted(){
        detail()
        .then(res => {
            console.log(res)
        })
    }
}
</script>

