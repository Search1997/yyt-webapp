<template>
  <div>
     <Top></Top>
     <div class="co">
   <div class="topbar">
   <router-link to="/nav/erdianshi">综合</router-link>
    <router-link to="/nav/erdianying">销量</router-link>
     <router-link to="/nav/erzongyi">展示</router-link>
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
    <Homed></Homed>
    <div class="cen"></div>
    <div class="re">
     <span style=" background-color: yellow"></span> 办套餐
    </div>
    <navato></navato>
    <div class="cen"></div>
    <div class="re">
     <span style=" background-color: green"></span> 买手机
    </div>
    <navabo></navabo>
    <div class="cen"></div>
    <div class="re">
     <span style=" background-color: blue"></span> 办业务
    </div>
    <Yewu></Yewu>
    <div class="cen"></div>
    <div class="re">
    <span style=" background-color: pink"></span> 选号码
    </div>
     <Haoma></Haoma>
    <div class="cen"></div>
    <div class="re">
    <span style=" background-color: green"></span> 全家享
    </div>
     <Homea></Homea>
      <Bout></Bout>
    </div>
      <BottomBar></BottomBar>
  </div>
</template>
<script>
 import Top from "../components/bottombar/top";
 import Homed from "../components/home/homed";
 import BottomBar from "../components/bottombar/bottombar";
 import navato from "../components/nav/navato";
 import navabo from "../components/nav/navabo";
 import Yewu from "../components/nav/yewu";
 import Haoma from "../components/nav/haoma";
 import Homea from "../components/home/homea";
 import Bout from "../components/bottombar/bout"
export default {
      components:{
          Top,
          BottomBar,
          Homed,
          navato,
          navabo,
          Yewu,
          Haoma,
          Homea,
          Bout
      }
  }
</script>
<style>
    .co{
     /*main绝对定位，进行内部滚动*/
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
       background-color: #f2f2f2
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
     height: 0.12rem;
     width: 100%;
     background-color: whitesmoke
   }
   .re{
     width: 100%;
     height: 0.4rem;
     font-size: 0.18rem;
     line-height: 0.4rem;
     padding-bottom: 0.2rem;
   }
   .re span{
     display:inline-block;
     height: 0.4rem;
     width: 2%;
     background-color: deeppink;
   }
</style>