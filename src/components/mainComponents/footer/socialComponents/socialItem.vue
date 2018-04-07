<template>
  <a
    class="socialItem"
    v-bind:title="titleMessage"
    v-bind:href="url"
    target="_blink"
  >
  </a>

</template>

<script>
export default {
  name: 'socialItem',
  data () {
    return {
      text: '',
      url: '#',
      titleMessage: 'Tw'
    }
  }
}
</script>

<style lang="less">
@import "../../../../assets/styles/var.less";

.socialItem {
  display: block;
  width: 26px;
  height: 26px;
  text-decoration: none;
  -webkit-mask-image: url("../../../../assets/img/tw.svg");
  mask-image: url("../../../../assets/img/tw.svg");
  background-color: @mainColor;
}

#About .socialItem,
#Contact .socialItem {
  background-color: @secondColor;
}

.socialItem:hover {
  transform: scale(1.1);
  background-color: @hoverColor !important;

}
</style>
