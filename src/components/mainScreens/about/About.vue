<template>
  <div id="About" class="container">
    <headerComponent></headerComponent>
    <aboutContent></aboutContent>
    <footerComponent></footerComponent>
  </div>
</template>

<script>
import headerComponent from '../../mainComponents/header/Header.vue'
import footerComponent from '../../mainComponents/footer/Footer.vue'
import aboutContent from './content/aboutContent.vue'

export default {
  components: {
    headerComponent,
    aboutContent,
    footerComponent
  },
  name: 'About',
}
</script>

<style lang="less" scoped>
@import "../../../assets/styles/var.less";
@import "../../../assets/styles/mixin.less";

.container {
  .background(@secondColor, @mainColor);
}

.container::after {
  background: @mainColor url('../../../assets/img/BigCircles.svg') no-repeat 100% 50%;
}

</style>
