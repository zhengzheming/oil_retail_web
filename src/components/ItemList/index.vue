<template>
  <ul class="my-item-com">
    <template v-for="(item,index) of comData.list">
      <li
        :key="index"
        :style="item.styleObj || comData.styleObj">
        <label><my-xing v-if="item.hasOwnProperty('triggerValidate')"/>{{ item.label }}:</label>
        <a
          v-if="item.type === 'link'"
          :href="item.url"
          class="content"
          :style="{color:item.color||'#666'}">{{ (comData.data[item.prop] === "" || comData.data[item.prop] === null || comData.data[item.prop] === undefined) ? "--" : comData.data[item.prop] }}</a>
        <el-select
            v-if="item.type === 'slt'"
            v-model="comData.data[item.prop]"
            placeholder="请选择">
            <el-option
            v-for="ele in item.data"
            :key="ele.val"
            :label="ele.label"
            :value="ele.val">
            </el-option>
        </el-select>
        <span
          v-else
          class="content"
          :style="{color:item.color||'#666'}">
          {{ (comData.data[item.prop] === "" || comData.data[item.prop] === null || comData.data[item.prop] === undefined) ? "--" : comData.data[item.prop] }}
        </span>
        <span
          v-if="item.else"
          class="content"
          style="margin-left: 20px;cursor: pointer"
          :style="{color:item.else.color}">{{ item.else.text }}</span>
      </li>
      <!-- 用作换行 -->
      <p
        v-if="item.nextLine"
        :key="index+0.1"
        style="clear:both;"/>
    </template>
  </ul>
</template>

<script>
export default {
  name: 'ItemList',
  props: {
    comData: {
      type: Object,
      default: function() {
        return {};
      }
    }
  }
};
</script>

<style scoped lang="scss">
// @import '../../assets/sass/old_base';
.my-item-com {
  overflow: hidden;
  & > li {
    display: flex;
    float: left;
    line-height: 32px;
    font-size: 14px;
    width: 32.33%;
    margin-bottom: 8px;
    label {
      color: #333;
      display: inline-block;
      width: 120px;
    }
    .content {
      width: 0;
      flex: 1;
    }
  }
}
</style>

/**
{
  list:[
    {
      label:'备注说明',
      val:this.util.getDeepKey(res,'data.contractSettlement.other_remark')
    },
    {
      label:'合计人民币总额',
      val:`¥${this.otherMoney}`
    }
  ],
  styleObj:'width:33.33%'   //每一项的样式，通常设置width即可
}
**/
