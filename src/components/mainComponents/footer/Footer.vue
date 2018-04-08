<template>
  <div class="wrapper">
    <navComponent></navComponent>
    <socialComponent></socialComponent>
  </div>
</template>

<script>
import navComponent from './navComponent.vue'
import socialComponent from './socialComponent.vue'

export default {
  components: {
    navComponent,
    socialComponent
  },
  name: 'footerComponent',
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
@import "../../../assets/styles/var.less";
@import "../../../assets/styles/mixin.less";

.wrapper{
  .mainBoxModel();
  margin-bottom: 70px;
}
</style>
