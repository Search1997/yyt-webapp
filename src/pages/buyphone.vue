<template>
  <div>
    <Topm></Topm>
       <div class="co">
          <div class="cn"><img src="../../static/home/buy-1.jpg" alt=""></div>
       <div class="topbar">
   <router-link to="/buyphone/zonghe">综合</router-link>
    <router-link to="/buyphone/xiaoliang">销量</router-link>
     <router-link to="/buyphone/jiage">价格</router-link>
      <router-link to="/buyphone/shaixuan">筛选</router-link>
    </div>
    <router-view></router-view>
       </div>
    <BottomBar></BottomBar>
  </div>
</template>
<script>
 import BottomBar from "../components/bottombar/bottombar";
 import Topm from "../components/bottombar/Topm";
  export default {
    name:'buyphone',
      components:{
          BottomBar,
          Topm
      }  
  }
</script>
<style>
  .co{
     /*on绝对定位，进行内部滚动*/
      position: absolute;
      /*top是头部的高度*/
      top: 80px;
      /*bottom是底部的高度*/
      bottom: 30px; 
      /*使之可以滚动*/
      overflow-y: scroll;
      /*增加弹性滚动,解决滚动不流畅的问题*/
      -webkit-overflow-scrolling: touch;  
  }
  .cn{
    width: 80%;
    height: 1.2rem;
    margin: 0 auto;
  }
  .cn img{
    width: 100%;
    height: 100%;
  }
    a{
       font-size: 0.16rem;
       flex: 1;
       text-align: center;
       color: black;
       text-decoration:none;
   }
   .topbar{
       width: 100%;
       display: flex;
       flex-direction: row;
       background-color: #f2f2f2;     
   }
</style>