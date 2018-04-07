<template>
  <ul class="navigation">
    <li
        v-for="item in items"
        :key="item.id"
    >
      <a
        :href="item.url"
        :title="item.title"
        :class="[mainClass, {activeScreen: item.isActive}]"
      >
        {{ item.message }}
      </a>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'navComponent',
  data () {
    return {
      mainClass: 'navLink',
      items: [
        { message: 'About',
          title: 'About',
          url: '#About',
          isActive: false
        },
        { message: 'Product',
          title: 'Product',
          url: '#Product',
          isActive: false
        },
        { message: 'Contact',
          title: 'Contact',
          url: '#Contact',
          isActive: false
        }
      ]
    }
  },
  computed: {
  //   getCoords: function () {
  //     var box = this.getBoundingClientRect();

  //     return {
  //       top: box.top + pageYOffset,
  //       left: box.left + pageXOffset
  //     };
  //   },

  //   function () {
  //     // `this` указывает на экземпляр
  //     // return this.items[0].isActive = true
  //     alert( "Браузер находится на " + window.screenX + "," + window.screenY );
  //   }
  }
}
</script>

<style lang="less" scoped>
@import "../../../assets/styles/var.less";
@import "../../../assets/styles/mixin.less";

.navigation {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 292px;
  margin: 0;
  padding: 0;
  list-style: none;
}

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

  .colorLiknAndColorLinkHover(@secondColor, @hoverColor);
}

#About .navLink,
#Contact .navLink {
  .colorLiknAndColorLinkHover(@mainColor, @hoverColor);
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
  background-color: @secondColor;
}

#About .activeScreen::before,
#Contact .activeScreen::before {
  background-color: @mainColor;
}
</style>
