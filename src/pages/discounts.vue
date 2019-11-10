<template>
  <div>
    <Topu></Topu>
   <div class="co">
     <div class="items">
      <div class="con" v-for="(v,i) in arr" :key="i">
        <img :src="v.imgurl" />       
         <span>{{v.title}}</span> 
       </div> 
    </div>
    <Bout></Bout>
   </div>
    <BottomBar></BottomBar>
  </div>
</template>
<script>
 import BottomBar from "../components/bottombar/bottombar";
 import Topu from "../components/bottombar/topu";
 import Bout from "../components/bottombar/bout";
  export default {
      components:{
          BottomBar,
          Topu,
          Bout 
      },data(){
        return{
          arr:[
            {
              title:"咪咕商城双11献豪礼",imgurl:require("../assets/home/de-0.jpg")
            },
            {
              title:"任我看流量包来袭啦！",imgurl:require("../assets/home/de-a.jpg")
            },
             {
              title:"11月手机换新季",imgurl:require("../assets/home/de-b.jpg")
            },
             {
              title:"免流畅玩哔哩哔哩，15G大流量仅需9元偶",imgurl:require("../assets/home/de-c.jpg")
            },
             {
              title:"移动双十一，邀你换新机",imgurl:require("../assets/home/de-d.jpg")
            },
             {
              title:"一包在手，天下我有！",imgurl:require("../assets/home/de-e.jpg")
            },
             {
              title:"组建全国亲情网，即享全国多群组畅聊",imgurl:require("../assets/home/de-f.jpg")
            },
             {
              title:"摆脱wifi，随时随地开视频",imgurl:require("../assets/home/de-r.jpg")
            },
             {
              title:"仅需18元/月，喜马拉雅VIP+专属流量包即可拥有！",imgurl:require("../assets/home/de-g.jpg")
            },
             {
              title:"仅需9元，微博肆意发",imgurl:require("../assets/home/de-k.jpg")
            },
             {
              title:"一张神奇的电话卡，月费仅48元超省钱~",imgurl:require("../assets/home/de-l.jpg")
            },
             {
              title:"中国移动Carry卡包年看畅快玩",imgurl:require("../assets/home/de-m.jpg")
            },
             {
              title:"办宝藏卡享肯德基大神卡",imgurl:require("../assets/home/de-n.jpg")
            },
             {
              title:"快手流量包前6月七折啦！视频直播任性刷，精彩...",imgurl:require("../assets/home/de-p.jpg")
            },
             {
              title:"定爱奇艺流量券组合包，优惠劵享不停",imgurl:require("../assets/home/de-q.jpg")
            },
             {
              title:"订喜马拉雅流量包，首6月7折啦",imgurl:require("../assets/home/de-0.jpg")
            },
             
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
      color: #344051;
      padding: 9px 10px 15px;
    }
    .items img{
      width: 100%;
      height: 2rem;
    }
</style>

   