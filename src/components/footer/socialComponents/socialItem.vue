<template>
  <a class="socialItem" v-bind:href="url">
     <img src="../../../assets/img/tw.svg" alt="Twitter">
  </a>
</template>

<script>
export default {
  name: 'socialItem',
  data () {
    return {
      text: '',
      url: '#'
    }
  }
}
</script>

<style lang="less">
@import "../../../assets/styles/var.less";
.socialItem {
  display: block;
  width: 26px;
  height: 26px;
  text-decoration: none;
}
</style>
