<template>
    <li>
      <a :class="[mainClass, {activeScreen: isActive}]" :href="url">{{ text }}</a>
    </li>
</template>

<script>
export default {
  name: 'navItem',
  data () {
    return {
      text: 'About',
      url: '#About',
      mainClass: 'navLink',
      isActive: true
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
.activeScreen {
  position: relative;
  pointer-events: none;
}

.activeScreen::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
  border-radius: 3px;
  display: block;
  width: 40px;
  height: 3px;
  background-color: #34495E;
}

// .activeScreen::before {
//   background-color: #ECF0F1;
// }
</style>
