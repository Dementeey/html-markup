<template>
  <div class="wrapper">
    <logoComponent></logoComponent>
    <textLinkComponent></textLinkComponent>
  </div>
</template>

<script>
import logoComponent from './logoComponent.vue'
import textLinkComponent from './textLinkComponent.vue'

export default {
  components: {
    logoComponent,
    textLinkComponent
  },
  name: 'headerComponent',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../../assets/styles/var.less";
@import "../../../assets/styles/mixin.less";

.wrapper{
  .mainBoxModel();
  margin-top: 35px;
}
</style>
