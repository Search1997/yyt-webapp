<template>
  <swipe class="my-swipe">
    <swipe-item class="slide1"></swipe-item>
    <swipe-item class="slide2"></swipe-item>
    <swipe-item class="slide3"></swipe-item>
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
.my-swipe {
  height: 120px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.slide1 {
  background-image: url(../../../static/home/a-2.png);
  background-size: 100%,120px;
  color: whitesmoke;
}

.slide2 {
 background-image: url(../../../static/home/a-3.jpg);
 background-size: 100%,120px;
  color: #000;
}

.slide3 {
  background-image: url(../../../static/home/a-4.jpg);
  color: whitesmoke;
  background-size: 100%,120px;
}
</style>
