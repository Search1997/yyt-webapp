<template>
  <div>
   <div class="re">
    <span style=" background-color: pink"></span> 选号码
    </div>
     <Haoma></Haoma>
    <div class="cen"></div>
    <div class="re">
    <span style=" background-color: green"></span> 全家享
    </div>
     <Homea></Homea>
    <BottomBar></BottomBar>
  </div>
</template>
<script>
 import BottomBar from "../bottombar/bottombar";
 import Haoma from "../nav/haoma";
 import Homea from "../home/homea";
  export default {
      components:{
          BottomBar,
          Homea,
          Haoma
      }
  }
</script>
<style>
 .cen{
     height: 0.12rem;
     width: 100%;
     background-color: whitesmoke
   }
   .re{
     width: 100%;
     height: 0.4rem;
     font-size: 0.18rem;
     line-height: 0.4rem;
     padding-bottom: 0.2rem;
   }
   .re span{
     display:inline-block;
     height: 0.4rem;
     width: 2%;
   }
</style>
