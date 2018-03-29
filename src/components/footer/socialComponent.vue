<template>
  <div class="social">
    <socialItem></socialItem>
    <socialItem></socialItem>
    <socialItem></socialItem>
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
      text: ''
    }
  }
}
</script>

<style lang="less">
.social {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 117px;
  margin: 0;
  padding: 0;
}
</style>
