<template>
  <div class="butss">
      <div class="butss-q">
          <h4>全网追剧流量包</h4>
          <span>一包在手，天下我有</span>
          <img src="../../../static/home/j-a.jpg" alt="">
          </div>
      <div class="butss-a">
          <h4>畅享套餐</h4>
          <span>语音流量大升级</span>
          <img src="../../../static/home/j-b.png" alt=""></div>
    </div>
</template>
<script>
  export default {
     
  }
</script>
<style>
  .butss{
     display: flex;
    flex-direction: row;
   }
    h4{
       padding-top: 0.12rem;
       color: #333333;
   }
    .butss span {
       font-size: 0.14rem;
       color:#999999;
       position: relative;
       top:-0.25rem;
   }
   .butss-q,.butss-a{
     border: 1px solid lightgray;
     height: 0.7rem;
     background-color: white;
     font-size: 0.16rem;
     position: relative;
     padding: 0.1rem;
   }
   .butss-q img{
     width: 0.45rem;
     height: 0.45rem;
     position: relative;
     left: 0.01rem;
     top:-0.25rem;
   }
    .butss-a img{
     width: 0.45rem;
     height: 0.45rem;
     position: relative;
     left: 0.01rem;
      top:-0.25rem;
   }
</style>
