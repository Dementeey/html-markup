<template>
  <a class="logo" href="/" v-bind:class="{ firstColor: isTruth, secondColor: !isTruth }">{{ text }}</a>
</template>

<script>
export default {
  name: 'logoComponent',
  data () {
    return {
      text: 'Oregano',
      isTruth: false
    }
  }
}
</script>

<style lang="less">
@import "../../assets/styles/var.less";
@import "../../assets/styles/mixin.less";
.logo {
  font-family: @mainFamily;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 36px;
  text-decoration: none;

}
.firstColor {
  .linksColor(@mainBlue, @hoverColor);
}

.secondColor {
  .linksColor(@mainWhite, @hoverColor);
}
</style>
