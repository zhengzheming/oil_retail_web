<template>
  <div class="my-queyr-form-wrap" >
    <ul
      :style="{height:isExpand?'unset':'42px'}">
      <template v-for="(item,index) of comData">
        <li
          v-if="index==2"
          :key="index+0.2">
          <el-button
            type="primary"
            style="width:65px;"
            @click="query">查询</el-button>
          <el-button
            style="width:65px;"
            plain
            @click="reset">重置</el-button>
          <p
            class="expand-control"
            @click="isExpand=!isExpand">{{ isExpand?'收起':'展开' }}搜索<i
              :class="isExpand?'icon-shangla':'icon-xiala'"
              class="icon"
              style="margin-left: 5px;"/></p>
        </li>
        <!-- item.type !== "radio" && item.type !== "box" -->
        <li
          v-if="item.type !== &quot;radio&quot; && item.type !== &quot;box&quot; && item.type !== &quot;tab&quot;"
          :key="index"
          :style="item.styleObj || ''">
          <p>
            <label class="ellipsis">
              <!-- <my-xing v-if="item.hasOwnProperty('triggerValidate')"/> -->
              {{ item.label }}:</label><small
                v-if="item.smallLabel"
                style="font-size: 14px;color: #999;">{{ item.smallLabel }}</small>
          </p>
          <el-select
            v-if="item.type=='slt'"
            :class="((item.triggerValidate && item.validateFunc(item.val)) || (item.triggerValidate && (item.val === '' || item.val === null || item.val === undefined))) ?'err':''"
            v-model="item.val"
            :placeholder="item.placeholder"
            class="el-slt"
            @blur="e => handleBlur(e,item)">
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
              v-model="item.adjustVal"
              :placeholder="item.adjustPlaceholder"
              style="width:40%;margin-right:2%;"
              @blur="e => handleBlur(e,item)">
              <el-option
                v-for="(item1,index) of item.adjustData"
                :key="index"
                :disabled="item.disabled"
                :label="item1.label"
                :value="item1.val"/>
            </el-select>
          </div>
          <el-input
            v-else-if="item.readonly"
            v-model="item.val"
            type="text"
            readonly="readonly"
            class="ipt"
            placeholder=""/>
          <el-input
            v-else
            :class="((item.triggerValidate && item.validateFunc(item.val)) || (item.triggerValidate && (item.val === '' || item.val === null || item.val === undefined))) ?'err':''"
            v-model="item.val"
            :placeholder="item.placeholder||'请输入内容'"
            type="text"
            class="ipt"
            @blur="e => handleBlur(e,item)"/>
        </li>
        <!-- item.type == "radio" -->
        <li
          v-else-if="item.type=='tab'"
          :key="index"
          style="display:none;"/>
        <li
          v-else
          :key="index"
          :style="item.styleObj || ''"
          class="check-wrap">
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
    <el-tabs 
      v-show="tabData.length" 
      v-model="activeName3" 
      class="query-tab" 
      type="primary" 
      @tab-click="handleClick">
      <el-tab-pane 
        v-for="item of tabData" 
        :key="item.val" 
        :label="item.label" 
        :name="item.val"/>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "QueryForm",
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
      activeName3: "first",
      val: "",
      isExpand: false,
      tabSlt: "",
      tabData: []
    };
  },
  watch: {
    comData: {
      handler: "getTabData",
      deep: true
    }
  },
  mounted() {
    this.getTabData();
  },
  methods: {
    getTabData() {
      let tmp = [];
      if (this.comData) {
        tmp = this.comData.filter(item => {
          return item.type == "tab";
        });
      }
      if (tmp.length) {
        tmp = tmp[0].data;
        this.tabData = tmp;
      }
    },
    handleBlur(e, item) {
      if (item.hasOwnProperty("triggerValidate")) {
        let el = e.target;
        if ((item.validateFunc && item.validateFunc(el.value)) || !el.value) {
          e.target.classList.add("err");
        } else {
          e.target.classList.remove("err");
        }
      }
      if (item.handleBlur) {
        item.handleBlur();
      }
    },
    query() {
      this.$emit("query");
    },
    reset() {
      this.$emit("reset");
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
      width: 31.33%;
      height: 32px;
      margin-right: 2%;
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
