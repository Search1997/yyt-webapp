<template>
  <div>
    <Top></Top>
    <div class="on">  
    <div class="lunbo">
      <Lbooa></Lbooa>
    </div>
    <div class="item">
      <div v-for="(v,i) in arr" :key="i">    
        <img :src="v.imgurl" />
        <br>
         <span>{{v.title}}</span> 
       </div> 
    </div>
     <div class="photo">
      <img src="../../static/home/d.jpg" alt="">
    </div>
    <div class="xiang">
      全家享 <button @click="go">买手机</button>
    </div>
    <Homea></Homea>
     <div class="xiang" style="color:pink">
      终端推荐
    </div>
    <Homec></Homec>
    </div>
    <BottomBar></BottomBar>
  </div>
</template>
<script>
  import Top from "../components/bottombar/top";
  import Lbooa from "../components/lunboo/lbooa";
  import Homea from "../components/home/homea";
  import Homec from "../components/home/homec";
  import BottomBar from "../components/bottombar/bottombar";
  
  export default {
      components:{
          BottomBar,
          Top,
          Lbooa,
          Homea,
          Homec
      }, methods:{
          go(){
            this.$router.push('buyphone/zonghe')
          }
        },
      data(){
        return{
          arr:[
            {
              title:"话费充值",imgurl:require('../assets/home/b-1.png')
            },
             {
              title:"流量充值",imgurl:require('../assets/home/b-2.png')
            },
             {
              title:"账单查询",imgurl:require('../assets/home/b-3.png')
            },
             {
              title:"套餐余量",imgurl:require('../assets/home/b-4.png')
            },
             {
              title:"已定业务",imgurl:require('../assets/home/b-5.png')
            },
             {
              title:"国漫专区",imgurl:require('../assets/home/c-1.png')
            },
             {
              title:"5G专区",imgurl:require('../assets/home/c-2.png')
           
            },
             {
              title:"买手机",imgurl:require('../assets/home/c-3.png')
            },
             {
              title:"办业务",imgurl:require('../assets/home/c-4.png')
            },
             {
              title:"办号卡",imgurl:require('../assets/home/c-5.png')
            }
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
      top: 80px;
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
      padding-left:0.1rem;
    }
    .item img{
      width: 0.45rem;
      height: 0.45rem;
      padding: 0.03rem;
    }
    .item span{
      font-size: 0.14rem;
      color: #666666;
    }
    .item>div{
      font-size: 0.16rem;
      width:20%;
    }
    .lunbo{
      width: 100%;
      height:1.4rem;
      background-color: blueviolet;
    }
     .photo{
     width: 100%;
     height: 0.7rem;
     position: relative;
   }
   .photo img{
     width: 100%;
     height: 65px;
     position:relative; 
     top:-0.3rem;
   }
   .xiang{
     margin-top: 0.1rem;
     width: 100%;
     height: 0.5rem;
     background-color: #f2f2f2;
     font-size: 0.18rem;
     color:#85CF22;
     text-align: center;
     line-height: 0.5rem;
   }
</style>


   
