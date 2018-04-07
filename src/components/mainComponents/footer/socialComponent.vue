<template>
  <div class="social">
    <a
      class="socialItem"
      title="titleMessage"
      v-bind:href="#"
      target="_blink"
    >
    </a>
    <a
      class="socialItem"
      v-bind:title="titleMessage"
      v-bind:href="url"
      target="_blink"
    >
    </a>
    <a
      class="socialItem"
      v-bind:title="titleMessage"
      v-bind:href="url"
      target="_blink"
    >
    </a>
  </div>
</template>

<script>
import socialItem from './socialComponents/socialItem.vue'

export default {
  components: {
    socialItem
  },
  name: 'socialComponent',
  data () {
    return {
      url: '#',
      titleMessage: 'Tw'
    }
  }
}
</script>

<style lang="less">
.social {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  min-width: 117px;
  margin: 0;
  padding: 0;
}
</style>
