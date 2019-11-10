<template>
  <div>
   <div class="re">
     <span style=" background-color: green"></span> 买手机
    </div>
    <navabo></navabo>
    <div class="cen"></div>
    <div class="re">
     <span style=" background-color: blue"></span> 办业务
    </div>
    <Yewu></Yewu>
    <BottomBar></BottomBar>
  </div>
</template>
<script>
 import BottomBar from "../bottombar/bottombar";
 import navabo from "../nav/navabo";
 import Yewu from "../nav/yewu";
  export default {
      components:{
          BottomBar,
          navabo,
          Yewu
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
     background-color: deeppink;
   }
</style>
