<template>
  <div class="on">
    <div class="my_top">
       <Mytopa></Mytopa>
       <Mytopb></Mytopb>
       <Mytopc></Mytopc>   
    </div>
    <div class="looo">
       <Mytopd></Mytopd>
      
       <Mytope></Mytope>
 <p style="font-size:0.14rem">我的服务</p>
<div class="item">
      <div v-for="(v,i) in arr" :key="i">
        <img :src="v.imgurl" />
        <br>
        <span>{{v.title}}</span>
      </div> 
    </div>
    <div class="lunbo">
      <Lboob></Lboob>
    </div>
      <Mytopf></Mytopf>
      <div class="ke"></div>
       <Mytopg></Mytopg>
         <div class="ke"></div>
       <bout></bout> 
    </div>
      <BottomBar></BottomBar>
  </div>
</template>
<script>
 import BottomBar from "../components/bottombar/bottombar";
 import Mytopa from "../components/bottombar/mytopa"; 
 import Mytopb from "../components/bottombar/mytopb"; 
 import Mytopc from "../components/bottombar/mytopc"; 
 import Mytopd from "../components/bottombar/mytopd";
 import Mytope from "../components/bottombar/mytope";  
 import Mytopf from "../components/bottombar/mytopf";  
 import Mytopg from "../components/bottombar/mytopg";  
 import Lboob from "../components/lunboo/lboob";
 import Bout from "../components/bottombar/bout"
 export default {
      components:{
          BottomBar,
          Mytopa,
          Mytopb,
          Mytopc,
          Mytopd,
          Mytope,
          Lboob,
          Mytopf,
          Mytopg,
          Bout
      },data(){
        return{
          arr:[
            {
              title:"套餐余量",imgurl:require('../assets/home/b-1.png')
            },
             {
              title:"账单查询",imgurl:require('../assets/home/b-2.png')
            },
             {
              title:"已定业务",imgurl:require("../assets/home/b-3.png")
            },
             {
              title:"充值订单",imgurl:require("../assets/home/b-4.png")
            },          
          ]
        }
      }
  }
</script>
<style scoped>
  .on{
      /*on绝对定位，进行内部滚动*/
      position: absolute;
      /*top是头部的高度*/
      top: 0px;
      /*bottom是底部的高度*/
      bottom: 30px; 
      /*使之可以滚动*/
      overflow-y: scroll;
      /*增加弹性滚动,解决滚动不流畅的问题*/
      -webkit-overflow-scrolling: touch;  
    } 
    .item{
      width:100%;
       display:flex; 
      flex-direction: row;
      flex-wrap: wrap;
    }
     .item img{
      width: 0.45rem;
      height: 0.45rem;
      padding: 0.08rem;
    }
    .item span{
      font-size: 0.12rem;
      color: #000000;
    }
    .item>div{
      font-size: 0px;
      width:25%;
    }
    .my_top{
      width: 100%;
      height: 2.2rem;
      background-color:#2f22e494;
      position: relative;
    }
   .looo{
     width: 90%;
     height: 3rem;
     margin:0rem auto; 
     z-index: -2;
     background-color: white
   }
   .lunbo{
      width: 100%;
      height:0.72rem;
      margin-top: 0.13rem;
    }
    .ke{
      width: 100%;
      height: 0.2rem;
      background-color: white;
    }
</style>


   