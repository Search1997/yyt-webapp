<template>
  <div>
    <Topu></Topu>
   <div class="co">
     <div class="items">
      <div class="con" v-for="(v,i) in arr" :key="i">
        <img :src="v.imgurl" />
        <!-- <br> -->
         <span>{{v.title}}</span> 
       </div> 
    </div>
   </div>
    <BottomBar></BottomBar>
  </div>
</template>
<script>
 import BottomBar from "../components/bottombar/bottombar";
 import Topu from "../components/bottombar/topu";
  export default {
      components:{
          BottomBar,
          Topu
      },data(){
        return{
          arr:[
            {
              title:"任我看流量包来袭啦！",imgurl:"../../static/home/de-a.jpg"
            },
             {
              title:"11月手机换新季",imgurl:"../../static/home/de-b.jpg"
            },
             {
              title:"免流畅玩哔哩哔哩，15G大流量仅需9元偶",imgurl:"../../static/home/de-c.jpg"
            }
             
          ]
        }
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
    .con{
      height: 2.4rem;
      position: relative;
    }
    .items span{
      font-size: 0.16rem;
      position: relative;
      top:-1.05rem;
    }
    .items img{
      width: 100%;
      height: 2rem;
    }
</style>

   