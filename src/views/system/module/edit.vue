<template>
  <div class="system-user__create" @click="showTree = false">
    <card>
      <span slot="title">修改系统模块</span>
      <el-form
        ref="form"
        :rules="rules"
        :model="form"
        :label-width="$customConfig.labelWidth">
        <el-row :gutter="$customConfig.colGutter">
          <el-col :span="12">
            <el-form-item
              prop="name"
              label="模块名称">
              <el-input v-model="form.name"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item 
              label="图标">
              <el-input v-model="form.icon"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="$customConfig.colGutter">
          <el-col 
            id="super-module" 
            :span="12">
            <el-form-item label="上级模块">
              <div @click.stop="showTree = true">
                <p @click.stop="showTree = !showTree" style="cursor: default;height: 32px; line-height: 32px;border: 1px solid #e6e6e6;
                  border-radius: 3px;width: 100%;background-color:#f7f7f7;color:#666;padding-left:15px;">{{parent_id_bind}}</p>
                <div v-show="showTree" style="position: absolute;width: 100%;left: 0;top: 32px;z-index: 1;background: #f7f7f7;">
                  <el-tree
                    style="background: #f7f7f7;border: 1px solid #e6e6e6;border-radius: 3px;"
                    :data="treeData"
                    node-key="id"
                    @node-click="handleNodeClick"
                    :expand-on-click-node="false">
                    <span class="custom-tree-node" slot-scope="{ node, data }">
                        <span style="display:inline-block;width:350px;">{{ node.label }}</span>
                    </span>
                  </el-tree>
                </div>
              </div>
              
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item 
              prop="code"
              label="权限码">
              <el-input v-model="form.code"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="$customConfig.colGutter">
          <el-col :span="12">
            <el-form-item 
              label="模块操作">
              <el-input v-model="actions_bind"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item 
              label="页面地址">
              <el-input v-model="form.page_url"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="$customConfig.colGutter">
          <el-col :span="12">
            <el-form-item 
              label="排序码">
              <el-input v-model="form.order_index"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item 
              label="是否外部链接">
              <el-select
                v-model="form.is_external"
                class="form-control"
                placeholder="请选择">
                <el-option
                  v-for="(item,key) in module_is_external"
                  :key="item"
                  :label="item"
                  :value="key+''"/>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="$customConfig.colGutter">
          <el-col :span="12">
            <el-form-item 
              label="是否启用">
              <el-select
                v-model="form.status"
                class="form-control"
                placeholder="请选择">
                <el-option
                  v-for="(item,key) in module_status"
                  :key="item"
                  :label="item"
                  :value="key+''"/>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item 
              label="是否公开">
              <el-select
                v-model="form.is_public"
                class="form-control"
                placeholder="请选择">
                <el-option
                  v-for="(item,key) in module_is_public"
                  :key="item"
                  :label="item"
                  :value="key+''"/>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="$customConfig.colGutter">
          <el-col :span="12">
            <el-form-item 
              label="是否菜单">
              <el-select
                v-model="form.is_menu"
                class="form-control"
                placeholder="请选择">
                <el-option
                  v-for="(item,key) in module_is_menu"
                  :key="item"
                  :label="item"
                  :value="key+''"/>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item 
              label="备注">
              <el-input v-model="form.remark"/>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </card>
  </div>
</template>

<script>
import { list, detail } from "@/api/system/module-manage";
export default {
  name: "SystemUserCreate",
  data() {
    return {
      showTree: false,
      treeData: [],
      updateEventName: {
        moduleEdit: 'moduleEdit:update-form',
        addModule: 'addModule:update-form'
      },
      actions_bind:'',
      parent_id_bind: '',
      rules: {
        name: [{ required: true, message: "请输入模块名称", trigger: "blur" }],
        code: { required: true, message: "请输入权限码", trigger: "blur" },
      },
      form: {
        id:"",
        name: "",
        icon: "",
        system_id: "",
        parent_id: 0,
        code: "",
        actions: [],
        page_url: "",
        order_index: "",
        is_external: '',
        status: '',
        is_public: '',
        is_menu: '',
        remark: "",
      },
      module_status: [],
      module_is_public: [],
      module_is_external: [],
      module_is_menu: []
    };
  },
  watch: {
    form: {
      handler: function(val) {
        this.$store.dispatch(this.updateEventName[this.$route.name], {
          form: val,
          formRef: this.$refs["form"]
        });
      },
      immediate: true,
      deep: true
    },
    actions_bind: function(val){
      let arr = val.split(',');
      arr.forEach(item => {
        this.form.actions.push({
          name:item.split('|')[0],
          code:item.split('|')[1]
        })
      });
    }
  },
  mounted() {
    this.$store.dispatch(this.updateEventName[this.$route.name], {
      form: this.form,
      formRef: this.$refs["form"]
    });
    if(this.$route.name == 'moduleEdit') {
      detail(this.$route.query.id)
      .then(res => {
        this.getList();
        if(res.state == 0){
          this.form = res.data;
          let actions = $utils.getDeepKey(res,'data.actions');
          let str = '';
          // 对返回的actions做格式转换
          var str = ''
          actions.forEach(item => {
            str += item.name + '|' + item.code + ','
          })
          if(str[str.length-1] == ','){
            str = str.substring(0,str.length-1)
          }
          this.actions_bind = str;
          this.parent_id_bind = $utils.getDeepKey(res,'data.parent_name');
        }
      })
    }else{
      this.getList();
    };
    let arr = ['module_status','module_is_public','module_is_external','module_is_menu']
    arr.forEach(item => {
      this[item] = $utils.getMap()[item]
    });
  },
  methods: {
    getList() {
      list().then(res => {
        if (res.state == 0) {
          this.treeData = $utils.getDeepKey(res,'data.children');
          if(this.$route.name == 'moduleEdit') {
            this.filterModule(this.treeData);
          }
        }
      });
    },
    filterModule(arr){
      if(Array.isArray(arr)){
        arr.forEach((item,key) => {
          if(item.id == this.form.id){
            arr.splice(key,1)
          }
          if(item.children && item.children.length){
            this.filterModule(item.children)
          }
        })
      }
    },
    handleNodeClick(data) {
      this.parent_id_bind = data.label;
      this.form.parent_id = data.id;
    }
  }
};
</script>
