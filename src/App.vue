<template>
  <div id="app">
    <MainComponent></MainComponent>
    <AboutComponent></AboutComponent>
    <ProductComponent></ProductComponent>
    <ContactComponent></ContactComponent>
  </div>
</template>

<script>
import MainComponent from './components/MainComponent.vue'
import AboutComponent from './components/AboutComponent.vue'
import ProductComponent from './components/ProductComponent.vue'
import ContactComponent from './components/ContactComponent.vue'

export default {
  components: {
    MainComponent,
    AboutComponent,
    ProductComponent,
    ContactComponent
  },
  name: 'app'
}
</script>

<style lang="less">
@import "./assets/styles/var.less";
html,
body {
  margin: 0;
  padding: 0;
}
</style>
