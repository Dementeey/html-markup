<template>
  <a class="textLink" href="#">{{ text }}</a>
</template>

<script>
export default {
  name: 'textLinkComponent',
  data () {
    return {
      text: 'Let’s get Started'
    }
  }
}
</script>

<style lang="less">
@import "../../assets/styles/var.less";
@import "../../assets/styles/mixin.less";

.textLink {
  .linksColor(@mainBlue, @hoverColor);
  font-family: @mainFamily;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 12px;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  text-decoration: none;
  color: #34495E;
}
</style>
