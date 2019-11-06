<template>
  <div>
     <Top></Top>
     <div class="ou">
   <div class="topbar">
   <router-link to="/nav/erdianshi">综合</router-link>
    <router-link to="/nav/erdianying">销量</router-link>
     <router-link to="/nav/erzongyi">价格</router-link>
      <router-link to="/nav/ershaixuan">筛选</router-link>
    </div>
    <router-view></router-view>
    <div class="photo">
      <img src="../../static/nav/n-9.png" alt="">
    </div>
    <div class="cen"></div>
    <div class="re">
     <span></span> 热门推荐
    </div>
    <div class="but">
      <div class="but-q"><img src="../../static/nav/n-11.png" alt=""></div>
      <div class="but-a"><img src="../../static/nav/n-10.png" alt=""></div>
    </div>
    </div>
      <BottomBar></BottomBar>
  </div>
</template>
<script>
 import Top from "../components/bottombar/top";
 import BottomBar from "../components/bottombar/bottombar";
  export default {
      components:{
          Top,
          BottomBar
      }
  }
</script>
<style>
.ou{
  margin-top: 1rem;
}
   a{
       font-size: 0.16rem;
       flex: 1;
       text-align: center;
   }
   .topbar{
       width: 100%;
       display: flex;
       flex-direction: row;
       background-color: aquamarine
   }
   .photo{
     width: 100%;
     height: 1rem;
   }
   .photo img{
     width: 100%;
     height: 1rem;
   }
   .cen{
     height: 0.2rem;
     width: 100%;
     background-color: aliceblue
   }
   .re{
     width: 100%;
     height: 0.5rem;
     font-size: 0.18rem;
     line-height: 0.5rem;
   }
   .re span{
     display:inline-block;
     height: 0.5rem;
     width: 2%;
     background-color: deeppink;
   }
   .but{
     display: flex;
       flex-direction: row;
   }
   .but-q,.but-a{
     border: 1px solid lightgray;
     height: 1.2rem;
   }
   .but-q img{
     width: 100%;
     height: 1.2rem;
   }
    .but-a img{
     width: 100%;
     height: 1.2rem;
   }
</style>