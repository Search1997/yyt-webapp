<template>
  <div class="nav_s">
      <div class="nav_s-q">
          <p>4G飞享套餐</p>
          <span>4G飞享自选套餐，包含流量...</span>
          <img src="../../../static/home/y44.jpg" alt="">
          </div>
      <div class="nav_s-a">
          <p>移动大流量系列套餐</p>
          <span>低至78元/月，全国好网...</span>
          <img src="../../../static/home/5r.jpg" alt=""></div>
    </div>
</template>
<script>
  export default {
     
  }
</script>
<style>
  .nav_s{
     display: flex;
       flex-direction: row;
   }
   .nav_s p{
       padding-top: 0.12rem;
       font-size: 0.16rem;
       color: #333333;
   }
    .nav_s span {
       font-size: 0.12rem;
       color:#999999;
   }
   .nav_s-q,.nav_s-a{
     border: 1px solid lightgray;
     height: 1.1rem;
     background-color: white;
     font-size: 0.16rem;
     position: relative;
     padding: 0.1rem;
   }
   .nav_s-q img{
     width: 36%;
     height: 0.6rem;
     position: relative;
     left: 0.94rem;
     top:0.1rem;
   }
    .nav_s-a img{
     width: 36%;
     height: 0.6rem;
     position: relative;
     left: 0.93rem;
      top:0.1rem;
   }
</style>
