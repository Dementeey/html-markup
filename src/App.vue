<template>
  <div id="app">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="less">
@import "./assets/styles/var/var.less";
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  height: 100vh;

  h1 {
    color: @hoverColor;
  }
}
#app::before,
#app::after {
  content: '';
  position: absolute;
  width: 50%;
  height: 100vh;
  top: 0;
  z-index: -5;
}
#app::before {
  left: 0;
  background-color: @mainBlue;
}
#app::after {
  right: 0;
  background-color: @mainWhite;
}
</style>
