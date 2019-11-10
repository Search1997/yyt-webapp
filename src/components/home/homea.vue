<template>
  <div class="buts">
      <div class="buts-q">
          <p>宽带新装</p>
          <span>家居必备</span>
          <img src="../../../static/home/e-1.png" alt="">
          </div>
      <div class="buts-a">
          <p>全国亲情网</p>
          <span>成员多至19人</span>
          <img src="../../../static/home/e-2.png" alt=""></div>
    </div>
</template>
<script>
  export default {
     
  }
</script>
<style>
  .buts{
     display: flex;
       flex-direction: row;
   }
   .buts p{
       padding-top: 0.12rem;
       font-size: 0.16rem;
       color: #333333;
   }
    .buts span {
       font-size: 0.12rem;
       color:#999999;
       position: relative;
       top:-0.4rem;
   }
   .buts-q,.buts-a{
     border: 1px solid lightgray;
     height: 1.1rem;
     background-color: white;
     font-size: 0.16rem;
     position: relative;
     padding: 0.1rem;
   }
   .buts-q img{
     width: 36%;
     height: 0.6rem;
     position: relative;
     left: 0.4rem;
     top:0.12rem;
   }
    .buts-a img{
     width: 36%;
     height: 0.6rem;
     position: relative;
     left: 0.3rem;
      top:0.15rem;
   }
</style>
