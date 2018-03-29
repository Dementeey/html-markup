<template>
    <li>
      <a class="navLink" v-bind:href="url">{{ text }}</a>
    </li>
</template>

<script>
export default {
  name: 'navItem',
  data () {
    return {
      text: 'About',
      url: '#About'
    }
  }
}
</script>

<style lang="less">
@import "../../../assets/styles/var.less";
@import "../../../assets/styles/mixin.less";

.navLink {
  font-family: @mainFamily;
  display: block;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 12px;
  line-height: 1.4;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  text-decoration: none;

.linksColor(@mainWhite, @hoverColor);
}
</style>
