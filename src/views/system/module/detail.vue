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
                data:{},
                list: [
                    {
                        label: '名称',
                        prop: ''
                    },
                    {
                        label: '权限码',
                        prop: ''
                    },
                    {
                        label: '所属系统',
                        prop: ''
                    },
                    {
                        label: '排序码',
                        prop: ''
                    },
                    {
                        label: '操作',
                        prop: ''
                    },
                    {
                        label: '页面链接',
                        prop: ''
                    },
                    {
                        label: '是否公开',
                        prop: ''
                    },
                    {
                        label: '是否外部链接',
                        prop: ''
                    },
                    {
                        label: '状态',
                        prop: ''
                    },
                    {
                        label: '更新时间',
                        prop: ''
                    },
                    {
                        label: '是否菜单',
                        prop: ''
                    },
                    {
                        label: '备注',
                        prop: ''
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

