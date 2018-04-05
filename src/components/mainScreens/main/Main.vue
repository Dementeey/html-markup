<template>
  <div class="container">
    <headerComponent></headerComponent>
    <h1 class="promo">{{ msg }}</h1>
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
  name: 'Main',
  data () {
    return {
      msg: 'Immediately regret falling into bathtub'
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../../assets/styles/var.less";
@import "../../../assets/styles/mixin.less";

.container {
  .background(@mainColor, @secondColor);
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
  letter-spacing: 3.5px;
  /* default color */
  color: #000000;
}

@supports ( -webkit-text-fill-color: transparent) {
  .promo {
    background: linear-gradient( to left, @mainColor 50%, @secondColor 50%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
}
</style>
