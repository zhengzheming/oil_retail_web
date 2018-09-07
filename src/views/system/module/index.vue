<template>
  <div class="system-user">
    <card>
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
        <el-tree
            :data="data5"
            node-key="id"
            default-expand-all
            :expand-on-click-node="false">
            <span class="custom-tree-node" slot-scope="{ node, data }">
                <span style="display:inline-block;width:350px;">{{ node.label }}</span>
                <span>
                <el-button
                    type="text"
                    size="mini"
                    @click="() => append(data)">
                    Append
                </el-button>
                <el-button
                    type="text"
                    size="mini"
                    @click="() => remove(node, data)">
                    Delete
                </el-button>
                </span>
                <span></span>
            </span>
        </el-tree>
    </card>
  </div>
</template>

<script>
let id = 1000;
export default {
  name: "SystemModule",
    data() {
      const data = [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }];
      return {
        data5: JSON.parse(JSON.stringify(data))
      }
    },

    methods: {
        query(){

        },
        add(){

        },
        append(data) {
            const newChild = { id: id++, label: 'testtest', children: [] };
            if (!data.children) {
            this.$set(data, 'children', []);
            }
            data.children.push(newChild);
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
  .custom-tree-node {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
    &>span{
        flex: 1;
    }
  }
</style>