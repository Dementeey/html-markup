<template>
  <ul class="navigation">
    <navItem></navItem>
    <navItem></navItem>
    <navItem></navItem>
    <navItem></navItem>

    <li v-for="item in items">
      {{ item.message }}
    </li>
  </ul>
</template>

<script>

export default {
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
