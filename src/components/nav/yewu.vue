<template>
  <div class="cutss">
      <div class="cutss-q">
          <h4>百度包</h4>
          <span>15G专属定向流量</span>
          <img src="../../../static/home/5ka-a.png" alt="">
          </div>
      <div class="cutss-a">
          <h4>流量月包</h4>
          <span>多种档位任你选择</span>
          <img src="../../../static/home/zaj.jpg" alt=""></div>
    </div>
</template>
<script>
  export default {
     
  }
</script>
<style>
  .cutss{
     display: flex;
    flex-direction: row;
   }
    h4{
       padding-top: 0.12rem;
       color: #333333;
   }
    .cutss span {
       font-size: 0.14rem;
       color:#999999;
       position: relative;
       top:-0.25rem;
   }
   .cutss-q,.cutss-a{
     border: 1px solid lightgray;
     height: 0.7rem;
     background-color: white;
     font-size: 0.16rem;
     position: relative;
     padding: 0.1rem;
   }
   .cutss-q img{
     width: 0.45rem;
     height: 0.45rem;
     position: relative;
     left: 0.01rem;
     top:-0.25rem;
   }
    .cutss-a img{
     width: 0.45rem;
     height: 0.45rem;
     position: relative;
     left: 0.01rem;
      top:-0.25rem;
   }
</style>
