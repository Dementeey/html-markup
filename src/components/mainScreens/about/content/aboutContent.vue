<template>
  <div class="mainContent">
    <div class="firstBlockContent">
      <div class="inWrapp">
        <span class="quotes"></span>
        <p class="text">
          My left donut is missing, as is my right destroy the blinds.
          Cat snacks cough hairball on conveniently placed pants cough
          furball for scratch at fleas scratch strangers and dream about hunting birds.
        </p>
      </div>
    </div>

    <div class="secondBlockContent">
      <div class="inWrapp">
        <div class="text">
          <p>
            Run outside as soon as door open. Eat all the power cords refuse to drink water except out of someone's glass purr so eat all the power cords but purr, and sit on human meow. Dream about hunting birds. Kitty kitty kitty poochy, yet intrigued by the shower.
          </p>
          <p>
            Hiss and stare at nothing then run suddenly away. Stare out the window destroy couch, and meow meow loudly just to annoy owners for spit up on light gray carpet instead of adjacent linoleum but need to chase tail. Stare out the window nap all day claw drapes ask for petting and make a weird face.
          </p>
          <p>
            Knock dish off table rub face on owner need to chase tail, yet freak human out make funny noise mow mow mow mow mow mow success now attack human, attack feet. Present belly, scratch hand when stroked pounce on unsuspecting person yet chase mice. Hide head under blanket so no one can see. Slap owner's face until human fills food dish.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'aboutContent',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../../../assets/styles/var.less";
@import "../../../../assets/styles/mixin.less";

.mainContent {
  .mainBoxModel();
  align-items: center;
}

.firstBlockContent,
.secondBlockContent {
  box-sizing: border-box;
  width: 50%;
}

.firstBlockContent .inWrapp {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 420px;
  min-height: 390px;
  background: url('../../../../assets/img/SmallCircles.svg') no-repeat 50% 50%;
}

.firstBlockContent .quotes {
  box-sizing: border-box;
  display: block;
  width: 50px;
  height: 40px;
  background: url('../../../../assets/img/quotes.svg') no-repeat 50% 50%;
}

.firstBlockContent .text {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: bold;
  line-height: 25px;
  font-size: 18px;
  letter-spacing: 1.37143px;
  color: @mainColor;
  margin-top: 20%;
}

.secondBlockContent {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.secondBlockContent .inWrapp {
  box-sizing: border-box;
  width: 420px;
  min-height: 390px;
}

.secondBlockContent .text {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: 21px;
  font-size: 15px;
  letter-spacing: 1.28571px;
  color: @secondColor;
}

</style>
