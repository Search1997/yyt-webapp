<template>
  <div class="toppp">
     <div class="toppp-one">
         <div class="toppp-one-a"><img src="../../../static/home/logo1.png" alt=""></div>
         <span>兰州</span><div class="toppp-one-b"><img src="../../../static/home/i-5.png" alt=""></div>
         <div class="toppp-one-c"><img src="../../../static/home/more.png" alt=""></div>
     </div>
     <div class="toppp-two">
         139****2032 &nbsp;&nbsp;&nbsp;<span class="aa"><img src="../../../static/home/i-5.png" alt=""></span>&nbsp;&nbsp;&nbsp;<span class="cj"><a href=""><span>余额：54.49元</span>&nbsp;&nbsp;&nbsp; 去充值></a></span>
     </div>
  </div>
</template>
<script>
  export default {
   
  }
</script>
<style scoped>
.toppp{
   width: 100%;
   height: 2.3rem;
   position:fixed;
   top: 0px;
   font-size: 0.16rem;
   background-color: white
}
.toppp-two{
  font-size: 0.16rem;
  height: 0.9rem;
  background-color: white
}
.toppp-one{
   display: flex;
   flex-direction:row;
   width: 100%; 
   font-size: 0.16rem;
   background-color: #f2f2f2;
   position: relative;
}
.toppp-one span{
   position: relative;
   top:0.12rem;
   left: -0.8rem;
   font-size: 0.14rem;
}
.toppp-one-a img{
   width: 45%;
   height: 0.22rem;
   padding: 0.1rem;
}
.toppp-one-b{
    position: relative;   
}
.toppp-one-b img{
 width: 70%;
 height: 0.09rem;
 position: relative; 
 top:0.12rem;
 left:-0.75rem;
}
.toppp-one-c{
    position: relative; 
}
.toppp-one-c img{
 width: 70%;
 height: 0.14rem;
 position: relative; 
 top:0.12rem;
 left:0.2rem;
}
.toppp-two{
  font-size: 0.14rem; 
  width: 100%;
  height: 0.3rem;
  padding-left: 0.2rem;
  padding-top: 0.08rem;
  position: relative;
  color: darkblue;
  text-decoration:none;
}
.aa{
 position: relative;
 top:0rem;
 left:-0.15rem;
}
.cj a{
  text-decoration:none;
   color: red;
   position: relative;
   top:-0.1rem;

}
.cj span{
 color:black;
}
</style>
