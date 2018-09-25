<template>
  <div class="my-queyr-form-wrap" >
    <ul
      :style="{height:isExpand?'unset':'42px'}">
      <template v-for="(item,index) of comData">
        <!-- item.type !== "radio" && item.type !== "box" -->
        <li
          v-if="item.type !== &quot;radio&quot; && item.type !== &quot;box&quot; && item.type !== &quot;tab&quot; && !item.hide"
          :key="index"
          :style="item.styleObj || ''">
          <p style="margin-right: 18px;">
            <label
              class="ellipsis"
              style="text-align: right;">
              {{ item.label }}:</label><small
                v-if="item.smallLabel"
                style="font-size: 14px;color: #999;">{{ item.smallLabel }}</small>
          </p>
          <el-select
            v-if="item.type=='slt'"
            v-model="item.val"
            :placeholder="item.placeholder"
            class="el-slt"
            clearable
            @blur="e => handleBlur(e,item)">
            <el-option
              v-for="(item,key) in item.data"
              :disabled="item.disabled"
              :key="key"
              :label="item.value"
              :value="item.id+''"/>
          </el-select>
          <el-date-picker
            v-else-if="['date', 'datetime'].includes(item.type)"
            v-model="item.val"
            :type="item.type"
            :value-format="item.type === 'date' ? 'yyyy-MM-dd' : 'yyyy-MM-dd HH:mm:ss'"
            style="width:100%;"
            placeholder="选择日期"/>
          <div
            v-else-if="item.type=='adjustInput'"
            style="display:flex;justify-content:space-between;">
            <el-select
              v-model="item.adjustVal"
              :placeholder="item.adjustPlaceholder"
              clearable
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
            v-model="item.val"
            :placeholder="item.placeholder||'请输入内容'"
            type="text"
            class="ipt"
            @blur="e => handleBlur(e,item)"/>
        </li>
        <!-- item.type == "radio" -->
        <li
          v-else-if="item.type=='tab' && !item.hide"
          :key="index"
          style="display:none;"/>
        <li
          v-else
          v-show="!item.hide"
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
        <li
          v-if="(index==1 || (comData.length==1 && index==0) && !item.hide)"
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
            v-if="queryLength>=3"
            class="expand-control"
            @click="isExpand=!isExpand">{{ isExpand?'收起':'展开' }}搜索<i
              :class="isExpand?'icon-shangla':'icon-xiala'"
              class="icon"
              style="margin-left: 5px;"/></p>
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
      v-model="tabSlt"
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
      queryLength: 0,
      tabSlt: "",
      val: "",
      isExpand: false,
      tabData: []
    };
  },
  watch: {
    comData: {
      handler: function(val) {
        this.getTabData();
        //判断查询条件的数量，以控制是否现实展开收起按钮
        this.queryLength = val.filter(item => {
          return item.type != "tab" && !item.hide;
        }).length;
        //判断查询条件是否有初始值，若有初始值且该初始值在收起的查询条件里，则要预先把状态设为展开
        val.forEach((item, key) => {
          if (item.val.trim() !== "" && key >= 2 && !item.hide) {
            this.isExpand = true;
          }
        });
      },
      deep: true
    },
    tabSlt: function(val) {
      this.$emit("change-tab", val);
    }
  },
  created() {
    const hooks = {
      slt: data => {
        if (typeof data.getOptions === "function") {
          data.getOptions().then(res => {
            const transformer = data.transformer || function() {};
            data.data = transformer(res.data);
          });
        }
      }
    };
    this.comData.forEach(data => {
      const cb = hooks[data.type] || function() {};
      cb(data);
    });
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
        this.tabSlt = tmp[0].val;
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
    handleClick() {
      // console.log(tab, event);
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
