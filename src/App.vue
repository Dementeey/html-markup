<template>
  <div id="app">
    <Main></Main>
    <About></About>
    <Product></Product>
    <Contact></Contact>
  </div>
</template>

<script>
import Main from './components/mainScreens/main/Main.vue'
import About from './components/mainScreens/about/About.vue'
import Product from './components/mainScreens/product/Product.vue'
import Contact from './components/mainScreens/contact/Contact.vue'

export default {
  components: {
    Main,
    About,
    Product,
    Contact
  },
  name: 'app'
}
</script>

<style lang="less">
html,
body {
  margin: 0;
  padding: 0;
}
</style>
