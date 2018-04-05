<template>
  <a class="textLink" href="#" v-bind:class="{ firstColor: isTruth, secondColor: !isTruth }">{{ text }}</a>
</template>

<script>
export default {
  name: 'textLinkComponent',
  data () {
    return {
      text: 'Let’s get Started',
      isTruth: true
    }
  }
}
</script>

<style lang="less">
@import "../../../assets/styles/var.less";
@import "../../../assets/styles/mixin.less";

.textLink {
  .colorLiknAndColorLinkHover(@mainColor, @hoverColor);
  font-family: @mainFamily;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 12px;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  text-decoration: none;
}
</style>
