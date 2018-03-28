<template>
  <a class="logo" href="/">{{ text }}</a>
</template>

<script>
export default {
  name: 'logoComponent',
  data () {
    return {
      text: 'Oregano'
    }
  }
}
</script>

<style lang="less">
@import "../../assets/styles/var.less";
@import "../../assets/styles/mixin.less";
.logo {
  .linksColor(@mainWhite, @hoverColor);
  font-family: @mainFamily;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 36px;
  text-decoration: none;
}
</style>
