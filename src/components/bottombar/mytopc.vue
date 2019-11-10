<template>
    <div class="mytopcaa">
       <div>
           <p>54.90元</p>
           <p class="d">我的余额</p>
       </div>
         <div>
           <p>4.05GB</p>
           <p class="d">通用流量已用</p>
       </div>
         <div>
           <p>595分钟</p>
           <p class="d">语音剩余</p>
       </div>
         <div>
           <p>250</p>
           <p class="d">可用积分</p>
       </div>

    </div>
</template>
<script scoped>
   export default {
   
  }
</script>
<style>
   .mytopcaa{
       width:100%;
      display:flex; 
      flex-direction: row;
      flex-wrap: wrap;
      font-size:0.14rem;
      padding-left: 0.3rem;
      text-align: center;
   }
   .mytopcaa>div{
       padding: 0 0.12rem;
       color: white;
   }
   .d{
     font-size:0.12rem;
   }
</style>