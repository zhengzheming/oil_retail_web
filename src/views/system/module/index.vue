<template>
  <div class="system-user">
    <card>
        <span slot="title">系统模块管理</span>
        <div style="display:flex;width:50%;">
            <el-input type="text" placeholder="输入关键字查询" style="margin-right:10px;"/>
            <el-button 
                type="primary" 
                style="width:65px;"
                @click="query">查询</el-button>
            <el-button 
                style="width:65px;"
                @click="add">添加</el-button>
        </div>
        <div>
            <div class="table-header" style="margin-top:20px;">
              <span>模块名</span>
              <p class="btn-wrap">
                <span>状态</span>
                <span style="justify-content: flex-start;">操作</span>
              </p>
            </div>
            <el-tree
                style="width: 32%;min-width: 600px;"
                :data="data5"
                node-key="id"
                default-expand-all
                :expand-on-click-node="false">
                <span class="custom-tree-node" slot-scope="{ node, data }">
                    <span style="display:inline-block;width:350px;">{{ node.label }}</span>
                    <div class="btn-wrap">
                      <span>已启用</span>
                      <span class="icon-list">
                        <i class="icon icon-shezhi icon-spec" @click="() => detail(data)"/>
                        <i class="icon icon-shezhi icon-spec" @click="() => update(data)"/>
                        <i class="icon icon-shezhi icon-spec" @click="() => remove(data)"/>
                      </span>
                    </div>
                </span>
            </el-tree>
        </div>
    </card>
  </div>
</template>

<script>
import {list} from '@/api/system/module'
let id = 1000;
export default {
  name: "SystemModule",
  data() {
    const data = [
      {
        id: 1,
        label: "一级 1",
        children: [
          {
            id: 4,
            label: "二级 1-1",
            children: [
              {
                id: 9,
                label: "三级 1-1-1"
              },
              {
                id: 10,
                label: "三级 1-1-2"
              }
            ]
          }
        ]
      },
      {
        id: 2,
        label: "一级 2",
        children: [
          {
            id: 5,
            label: "二级 2-1"
          },
          {
            id: 6,
            label: "二级 2-2"
          }
        ]
      },
      {
        id: 3,
        label: "一级 3",
        children: [
          {
            id: 7,
            label: "二级 3-1"
          },
          {
            id: 8,
            label: "二级 3-2"
          }
        ]
      }
    ];
    return {
      data5: JSON.parse(JSON.stringify(data))
    };
  },
  mounted(){
    this.getList()
  },
  methods: {
    getList(){
      list()
      .then(res => {
        if(res.state == 0) {
          this.data5 = res.data
        }
      })
    },
    query() {},
    add() {
      console.log(123)
      this.$router.push({ name: 'addModule'})
    },
    detail(){
      this.$router.push({ name: 'moduleDetail', query: { id: 123 }})
    },
    update(){
      this.$router.push({ name: 'moduleEdit', query: { id: 123 }})
    },
    remove(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex(d => d.id === data.id);
      children.splice(index, 1);
    }
  }
};
</script>
<style lang="scss" scoped>
.custom-tree-node,.table-header {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
.table-header {
  width: 32%;
  min-width: 600px;
  height: 32px;
  line-height: 32px;
}
.btn-wrap{
    width: 150px;
    display: flex;
    justify-content: space-around;
    span{
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
}
</style>