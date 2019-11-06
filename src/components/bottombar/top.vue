<template>
  <div class="top">
     <div class="top-one">
         <div class="top-one-a"><img src="../../../static/home/logo1.png" alt=""></div>
         <div class="top-one-b"><img src="../../../static/home/i-5.png" alt=""></div>
         <div class="top-one-c"><img src="../../../static/home/more.png" alt=""></div>
     </div>
     <div class="top-two">
         139****2032 &nbsp;&nbsp;&nbsp;<span><img src="../../../static/home/i-5.png" alt=""></span>&nbsp;&nbsp;&nbsp;<span><a href=""><span>余额：54.49元</span> 去充值></a></span>
     </div>
  </div>
</template>
<script>
  export default {
  
  }
</script>
<style scoped>
.top{
   width: 100%;
   height: 0.9rem;
   position:fixed;
   top: 0px;
   font-size: 0.16rem;
}
.top-two{
  font-size: 0.16rem;
}
.top-one{
   display: flex;
   flex-direction:row;
   width: 100%; 
   font-size: 0.16rem;
   background-color: gainsboro;
}
.top-one-a img{
   width: 60%;
   height: 0.3rem;
   padding: 0.1rem;
}
.top-one-b{
    position: relative; 
}
.top-one-b img{
 width: 80%;
 height: 0.1rem;
 position: relative; 
 top:0.14rem;
 left:-0.3rem;
}
.top-one-c{
    position: relative; 
}
.top-one-c img{
 width: 80%;
 height: 0.2rem;
 position: relative; 
 top:0.14rem;
 left:0.6rem;
}
</style>
