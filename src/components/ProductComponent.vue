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
  name: 'ProductComponet',
  data () {
    return {
      msg: ''
    }
  }
}
// headerComponent.$data.text = "What we do"
</script>

<style lang="less" scoped>
@import "../assets/styles/var.less";
@import "../assets/styles/mixin.less";

.container {
  .background(@mainBlue, @mainWhite);
}
</style>
