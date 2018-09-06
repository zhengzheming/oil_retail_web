<template>
    <transition name="side-content">
        <div class="side-content__wrapper" v-show="visible"  @click.self="hide">
            <div class="side-content">
                <slot></slot>
            </div>
        </div>
    </transition>
</template>

<script>
  import Popup from 'element-ui/src/utils/popup';
    export default {
      name: 'sideContent',
      mixins: [Popup],
      props: {
        modal: {
          type: Boolean,
          default: true
        }
      },
      methods: {
        hide() {
          this.$emit('update:visible', false)
        }
      }
    }
</script>

<style scoped lang="scss">
    @import "~@/styles/funcs";
    .side-content-enter .side-content,
    .side-content-leave-to .side-content{
        right: -60%
    }
    .side-content__wrapper{
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transition: right 0.3s;
    }
    .side-content {
        width: 60%;
        height: 100vh;
        background-color: #fff;
        position: absolute;
        right: 0;
        transition: right .3s;
    }
</style>
