<template>
  <swipe class="my-swipes">
    <swipe-item class="slides1"></swipe-item>
    <swipe-item class="slides2"></swipe-item>
    <swipe-item class="slides3"></swipe-item>
</swipe>
</template>
<script>
 import BottomBar from "../bottombar/bottombar";
  export default {
      components:{
          BottomBar
      }
  }
</script>
<style>
@import 'vue-swipe/dist/vue-swipe.css';
.my-swipes {
  height: 140px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.slides1 {
  background-image: url(../../../static/home/a-2.png);
  background-size: 100%,140px;
  color: whitesmoke;
}

.slides2 {
 background-image: url(../../../static/home/a-3.jpg);
 background-size: 100%,140px;
color: #000;
}

.slides3 {
  background-image: url(../../../static/home/a-4.jpg);
  color: whitesmoke;
  background-size: 100%,140px;
}
</style>
