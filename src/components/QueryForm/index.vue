<template>
  <div class="my-queyr-form-wrap" >
    <ul 
      :style="{height:isExpand?'unset':'42px'}">
      <template v-for="(item,index) of comData">
        <li 
          :key="index+0.2" 
          v-if="index==2">
          <el-button 
            type="primary" 
            style="width:65px;"
            @click="query">查询</el-button>
          <el-button 
            style="width:65px;"
            @click="reset">重置</el-button>
          <p
            @click="isExpand=!isExpand"
            class="expand-control">{{ isExpand?'收起':'展开' }}搜索<i 
              class="icon" 
              :class="isExpand?'icon-shangla':'icon-xiala'"/></p>
        </li>
        <!-- item.type !== "radio" && item.type !== "box" -->
        <li
          :key="index"
          v-if="item.type !== &quot;radio&quot; && item.type !== &quot;box&quot; && item.type !== &quot;tab&quot;"
          :style="item.styleObj || ''">
          <p>
            <label class="ellipsis">
              <!-- <my-xing v-if="item.hasOwnProperty('triggerValidate')"/> -->
              {{ item.label }}:</label><small
              v-if="item.smallLabel"
              style="font-size: 14px;color: #999;">{{ item.smallLabel }}</small>
          </p>
          <el-select
            :class="((item.triggerValidate && item.validateFunc(item.val)) || (item.triggerValidate && (item.val === '' || item.val === null || item.val === undefined))) ?'err':''"
            @blur="e => handleBlur(e,item)"
            v-model="item.val"
            v-if="item.type=='slt'"
            class="el-slt"
            :placeholder="item.placeholder">
            <el-option
              v-for="(item1,index) of item.data"
              :disabled="item.disabled"
              :key="index"
              :label="item1.label"
              :value="item1.val"/>
          </el-select>
          <div
            v-else-if="item.type=='adjustInput'"
            style="display:flex;justify-content:space-between;">
            <el-select
              :class="((item.triggerValidate && item.validateFunc(item.val)) || (item.triggerValidate && (item.val === '' || item.val === null || item.val === undefined))) ?'err':''"
              @blur="e => handleBlur(e,item)"
              v-model="item.adjustVal"
              style="width:40%;margin-right:2%;"
              :placeholder="item.adjustPlaceholder">
              <el-option
                v-for="(item1,index) of item.adjustData"
                :key="index"
                :disabled="item.disabled"
                :label="item1.label"
                :value="item1.val"/>
            </el-select>
            <!-- <input type="text" style="flex:1;" :class="((item.triggerValidate && item.validateFunc(item.val)) || (item.triggerValidate && (item.val === '' || item.val === null || item.val === undefined))) ?'err':''" @blur="e => handleBlur(e,item)" v-model="item.val" class="ipt" :placeholder="item.placeholder"> -->
            <!-- <my-input-with-logo :com-data="item"/> -->
          </div>
          <!-- <my-textarea
            :com-data="item.data"
            v-else-if="item.type=='textarea'"/> -->
          <!-- <my-upload
            :com-data="item.data"
            v-else-if="item.type=='upload'"/> -->
          <!-- <my-input-with-logo
            v-else-if="item.type=='inputWithLogo'"
            :com-data="item"/> -->
          <el-input
            type="text"
            v-model="item.val"
            v-else-if="item.readonly"
            readonly="readonly"
            class="ipt"
            placeholder=""/>
          <el-input
            type="text"
            :class="((item.triggerValidate && item.validateFunc(item.val)) || (item.triggerValidate && (item.val === '' || item.val === null || item.val === undefined))) ?'err':''"
            @blur="e => handleBlur(e,item)"
            v-model="item.val"
            v-else
            class="ipt"
            :placeholder="item.placeholder||'请输入内容'"/>
        </li>
        <!-- item.type=='box -->
        <li
          v-else-if="item.type=='box'"
          :key="index"
          :style="item.styleObj || ''">
          <ul>
            <li
              v-for="(item1,index1) of item.data"
              :key="index1">
              <p>
                <label>{{ item1.label }}</label><small
                  v-if="item1.smallLabel"
                  style="font-size: 14px;color: #999;">{{ item1.smallLabel }}</small>
              </p>
              <el-select
                v-model="item.val"
                v-if="item1.type=='slt'"
                class="el-slt"
                :placeholder="item.placeholder">
                <el-option
                  v-for="(item2,index) of item1.data"
                  :disabled="item.disabled"
                  :key="index"
                  :label="item2.label"
                  :value="item2.val"/>
              </el-select>
              <!-- <my-textarea
                :com-data="item.data"
                v-else-if="item1.type=='textarea'"/> -->
              <!-- <my-upload
                v-else-if="item1.type=='upload'"
                :com-data="item1.data"><em/></my-upload> -->
              <input
                type="text"
                :value="val"
                v-else-if="item1.readonly"
                readonly="readonly"
                class="ipt"
                :placeholder="item.placeholder">
              <input
                type="text"
                :value="val"
                v-else
                class="ipt"
                :placeholder="item.placeholder">
            </li>
          </ul>
        </li>
        <!-- item.type == "radio" -->
        <li 
          style="display:none;" 
          v-else-if="item.type=='tab'" 
          :key="index"/>
        <li
          v-else
          class="check-wrap"
          :key="index"
          :style="item.styleObj || ''">
          <label>{{ item.label }}</label>
          <div>
            <el-radio
              v-model="item.val"
              label="1">是</el-radio>
            <el-radio
              v-model="item.val"
              label="2">否</el-radio>
          </div>
        </li>
        <!-- 用作换行 -->
        <p
          v-if="item.nextLine"
          :key="index+0.1"
          style="width:100%;"/>
      </template>
    </ul>
    <el-tabs class="query-tab" v-model="activeName3" type="primary" @tab-click="handleClick">
      <el-tab-pane v-for="item of tabData" :key="item.val" :label="item.label" :name="item.val"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'QueryForm',
  props: {
    comData: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      activeName3: 'first',
      val: '',
      isExpand: false,
      tabSlt: '',
      tabData: []
    };
  },
  watch: {
    comData: {
      handler: 'getTabData',
      deep: true
    }
  },
  mounted(){
    this.getTabData();
  },
  methods: {
    getTabData(){
      let tmp = [];
      if (this.comData) {
        tmp = this.comData.filter(item => {
          return item.type == 'tab';
        });
      }
      if (tmp.length) {
        tmp = tmp[0].data;
        this.tabData = tmp;
      }
      console.log(this.tabData)
    },
    handleBlur(e, item) {
      if (item.hasOwnProperty('triggerValidate')) {
        let el = e.target;
        if ((item.validateFunc && item.validateFunc(el.value)) || !el.value) {
          e.target.classList.add('err');
        } else {
          e.target.classList.remove('err');
        }
      }
      if (item.handleBlur) {
        item.handleBlur();
      }
    },
    query() {
      this.$emit('query');
    },
    reset() {
      this.$emit('reset');
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style scoped lang="scss">
// @import '../../assets/sass/old_base';
.my-queyr-form-wrap {
  & > div.query-tab {
    display: flex;
    margin-top: 14px;
    padding-top: 14px;
    border-top: 2px dashed #e9e9e9;
    & > span {
      padding: 0 16px;
      height: 32px;
      text-align: center;
      line-height: 32px;
      border: 1px solid #dcdcdc;
      cursor: pointer;
      &:first-child {
        border-radius: 3px 0 0 3px;
      }
      &:last-child {
        border-radius: 0 3px 3px 0;
      }
      &:not(:first-child) {
        margin-left: -1px;
      }
      &:hover {
        border: 1px solid #000;
        z-index: 1;
      }
      &.slt {
        border-color: #ffc099;
        background-color: #ffefe6;
        color: #ff6200;
      }
    }
  }
  & > ul {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    margin-bottom: 15px;
    .expand-control {
      color: #666;
      font-size: 14px;
      cursor: pointer;
      margin-left: 20px;
      display: flex;
      align-items: center;
    }
    & > li {
      margin-top: 10px;
      width: 32.33%;
      height: 32px;
      margin-right: 1%;
      &:not(.check-wrap) {
        display: flex;
        label {
          line-height: 32px;
          width: 7em;
          display: inline-block;
          font-size: 14px;
        }
        input,
        .el-slt {
          width: 100%;
        }
      }
      &.check-wrap {
        & > label {
          line-height: 30px;
        }
        & > div {
          line-height: 36px;
          & > label {
            input {
              margin-left: 4px;
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
