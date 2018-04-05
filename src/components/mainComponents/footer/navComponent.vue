<template>
  <ul class="navigation">
    <navItem></navItem>
    <navItem></navItem>
    <navItem></navItem>
    <navItem></navItem>
  </ul>
</template>

<script>
import navItem from './navComponents/navItem.vue'

export default {
  components: {
    navItem
  },
  name: 'navComponent',
  data () {
    return {
      text: 'Oregano',
      isTruth: false
    }
  }
}
</script>

<style lang="less" scoped>
.navigation {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 292px;
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
