<template>
  <div class="social">
    <a
      class="socialItem tw"
      href="#"
      target="_blink"
      title="twitter"
    >
    </a>
    <a
      class="socialItem in"
      href="#"
      target="_blink"
      title="linkedIn"
    >
    </a>
    <a
      class="socialItem fb"
      href="#"
      target="_blink"
      title="facebook"
    >
    </a>
  </div>
</template>

<script>
export default {
  name: 'socialComponent'
}
</script>

<style lang="less" >
@import "../../../assets/styles/var.less";

.social {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  min-width: 117px;
  margin: 0;
  padding: 0;
}

.socialItem {
  display: block;
  width: 26px;
  height: 26px;
  text-decoration: none;
  background-color: @mainColor;
}

.tw {
  -webkit-mask-image: url("../../../assets/img/tw.svg");
  mask-image: url("../../../assets/img/tw.svg");
}

.in {
  -webkit-mask-image: url("../../../assets/img/in.svg");
  mask-image: url("../../../assets/img/in.svg");
}

.fb {
  -webkit-mask-image: url("../../../assets/img/fb.svg");
  mask-image: url("../../../assets/img/fb.svg");
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
