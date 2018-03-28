<template>
  <div class="container">
    <headerComponent></headerComponent>
    <h1 class="promo">{{ msg }}</h1>
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
  name: 'MainComponent',
  data () {
    return {
      msg: 'Immediately regret falling into bathtub'
    }
  }
}
</script>

<style lang="less" scoped>
@import "../assets/styles/var.less";
@import "../assets/styles/mixin.less";

.container {
  .background(@mainBlue, @mainWhite);
}
.promo {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 650px;
  transform: translate(-50%, -50%);
  font-family: @mainFamily;
  font-style: normal;
  font-weight: bold;
  line-height: 80px;
  font-size: 72px;
  text-align: center;
  letter-spacing: 1.7px;
  /* default color */
  color: #000000;
}

@supports ( -webkit-text-fill-color: transparent) {
  .promo {
    background: linear-gradient( to left, @mainBlue 50%, @mainWhite 50%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
}
</style>
