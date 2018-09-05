<template>
  <ul class="my-form-wrap">
    <template v-for="(item,index) of comData.list">
      <!-- item.type !== "radio" && item.type !== "box" -->
      <li
        :key="index"
        v-if="item.type !== &quot;radio&quot; && item.type !== &quot;box&quot;"
        :style="item.styleObj || comData.styleObj">
        <p>
          <label>
            <!-- <my-xing v-if="item.hasOwnProperty('triggerValidate')"/> -->
            {{ item.label }}</label><small
            v-if="item.smallLabel"
            style="font-size: 14px;color: #999;">{{ item.smallLabel }}</small>
        </p>
        <el-select
          :class="((item.triggerValidate && item.validateFunc && item.validateFunc(item.val)) || (item.triggerValidate && (item.val === '' || item.val === null || item.val === undefined))) ?'err':''"
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
            :class="((item.triggerValidate && item.validateFunc && item.validateFunc(item.val)) || (item.triggerValidate && (item.val === '' || item.val === null || item.val === undefined))) ?'err':''"
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
        <!-- <uploader
          @update-files="$emit('update-files', $event)"
          :adapter-options="item.adapterOptions"
          :files-init="item.files"
          :del-file-url="item.delFileUrl"
          v-else-if="item.type=='upload'"/>
        <my-input-with-logo
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
          :class="((item.triggerValidate && item.validateFunc && item.validateFunc(item.val)) || (item.triggerValidate && (item.val === '' || item.val === null || item.val === undefined))) ?'err':''"
          @blur="e => handleBlur(e,item)"
          v-model="item.val"
          v-else
          class="ipt"
          :placeholder="item.placeholder"/>
      </li>
      <!-- item.type=='box -->
      <li
        v-else-if="item.type=='box'"
        :key="index"
        :style="item.styleObj || comData.styleObj">
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
              style="width:100%;"
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
        v-else
        class="check-wrap"
        :key="index"
        :style="item.styleObj || comData.styleObj">
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
</template>

<script>
// import uploader from '../Uploader.vue';
export default {
  name: 'FormCom',
  props: {
    comData: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  // components: {
  //   uploader
  // },
  data() {
    return {
      val: ''
    };
  },
  methods: {
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
    }
  }
};
</script>
<style scoped lang="scss">
// @import '../../assets/sass/old_base';
.my-form-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  & > li {
    width: 32.33%;
    &:not(.check-wrap) {
      display: flex;
      flex-direction: column;
      label {
        line-height: 30px;
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
</style>


/**
 {
   *data:[
     {
      triggerValidate:false,      //是否需要数据校验
      *label: ''                  //label
      *val: item.quantity && item.quantity.quantity,
      placeholder: "请输入结算数量",
      readonly: false,
      validateFunc:function(val){       //默认校验只校验是否为空，如果需要其它校验规则，则需要该项
        return (val === 0 || val === '0' || parseFloat(val)===0)
      },
      styleObj:'width:65.67%;margin:0 0.5%;'    //单独给某一项设置样式
    },
    {
      triggerValidate:false,
      type: "inputWithLogo",
      label: "结算金额",
      logo: "$",
      val: item.amount,
      placeholder: "请输入结算金额",
      readonly: tmp.hasDetail ? true : false
    },
   ],
  styleObj: "width:32.33%;margin-right:1%;"   //这里设置的是每一项的样式，即li元素的样式
 }
 */
