<template>
  <div id="Product" class="container">
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
  name: 'Product',
  data () {
    return {
      msg: ''
    }
  }
}
// headerComponent.$data.text = "What we do"
</script>

<style lang="less" scoped>
@import "../../../assets/styles/var.less";
@import "../../../assets/styles/mixin.less";

.container {
  .background(@mainColor, @secondColor);}
</style>
