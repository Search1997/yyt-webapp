<template>
    <div class="mytopbaa">
        <div class="mytopbaa_a"><img src="../../assets/home/icon-user.jpg" alt=""></div>
        <div class="mytopbaa_b">
            <p>晚上好，139****2032</p>
            <p>甘肃 兰州&nbsp;&nbsp;&nbsp;信用分619</p>
        </div>
        <div class="mytopbaa_c">我的权益</div>
    </div>
</template>
<script scoped>
   export default {
   
  }
</script>
<style>
   .mytopbaa{
       width:100%;
      display:flex; 
      flex-direction: row;
      flex-wrap: wrap;
      font-size:0.16rem;
      padding: 0.2rem;
   }
    .mytopbaa_a{
        width: 0.7rem;
        height: 0.7rem;
        border-radius: 50%;
        background-color: aqua
    }
   .mytopbaa_a img{
       width: 100%;
       height: 100%;
       border-radius: 50%;
   }
   .mytopbaa_b{
       padding: 0.2rem;
       font-size: 0.16rem;
       color: white;
   }
   .mytopbaa_c{
       padding-top: 0.3rem;
       font-size: 0.12rem;
       color:white;
   }
</style>