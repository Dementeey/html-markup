<template>
  <div class="container">
    <headerComponent></headerComponent>
    <footerComponent></footerComponent>
  </div>
</template>

<script>
import headerComponent from '../../mainComponents/header/Header.vue'
import footerComponent from '../../mainComponents/footer/Footer.vue'

export default {
  components: {
    headerComponent,
    footerComponent
  },
  name: 'Contact',
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

.container {
  .background(@secondColor, @mainColor);
}
</style>
