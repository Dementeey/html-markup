<template>
  <div class="container">
    <headerComponent></headerComponent>
    <footerComponent></footerComponent>
  </div>
</template>

<script>
import headerComponent from './header/headerComponent.vue'
import footerComponent from './footer/footerComponent.vue'

export default {
  components: {
    headerComponent,
    footerComponent
  },
  name: 'ContactComponet',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style lang="less" scoped>
@import "../assets/styles/var.less";
@import "../assets/styles/mixin.less";

.container {
  .background(@mainWhite, @mainBlue);
}
</style>
