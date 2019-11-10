<template>
  <div class="bue">
      <div class="bue-f">     
          <img src="../../../static/home/2d.png" alt="">
           <p>精选靓号</p>
          <span>资费超低任我行</span>
          </div>
      <div class="bue-a">
        <div class="ccx">
           <p>移动网卡</p>
          <span>1元1GB</span>
          <img src="../../../static/home/ll-1.png" alt="">
          </div>
          <div class="ccu">
           <p>花卡宝藏版</p>
          <span>权益多多</span>
          <img src="../../../static/home/ll-2.jpg" alt="">
          </div>
        </div>
         
    </div>
</template>
<script>
  export default {
     
  }
</script>
<style>
  .bue{
     display: flex;
    flex-direction: row;
    text-align: center
   }
  .bue-f>p{
       padding-top: 0.12rem;
       color: #333333;
       font-size: 0.16rem;
   }
   span {
       font-size: 0.14rem;
       color:#999999;
       position: relative;
       top:0.05rem;
       text-align: center
   }
   .bue-f{
     border: 1px solid lightgray;
     height: 1.6rem;
     width: 50%;
     background-color: whitesmoke;
     font-size: 0.16rem;
     position: relative;
     padding: 0.1rem;
   }
   .bue-a{
     border: 1px solid lightgray;
     height: 1.6rem;
     width: 50%;
     font-size: 0.16rem;
     position: relative;
    padding: 0.1rem;  
    background-color: whitesmoke
   }
   .ccu{
     width: 100%;
     height: 0.8rem;
     position: relative;
   }
    .ccu p{
     position: relative;
      left:-0.42rem;
     font-size: 0.16rem;
   }
  .ccu span {
    font-size: 0.14rem;
    color:#999999;
    position: relative;
    top:-0.25rem;
    left:-0.3rem;
   }
   .ccx p{
     position: relative;
     left: -0.42rem;
      font-size: 0.16rem;
   }
  .ccx span {
    font-size: 0.14rem;
    color:#999999;
    position: relative;
    top:-0.25rem;
    left:-0.3rem;
   }
    .ccx{
     width: 100%;
     height: 0.8rem;
   }
   .bue-f img{
     width: 0.9rem;
     height: 0.9rem;
   }
  .bue-a img{
     width: 0.45rem;
     height: 0.45rem;
     position: relative;
     top:-0.13rem;
     left:0.1rem;
   }
</style>
