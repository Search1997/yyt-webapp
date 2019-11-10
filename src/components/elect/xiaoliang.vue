<template>
  <div>
    <div class="item">
      <div class="hen" v-for="(v,i) in arr" :key="i">
        <div class="ve"><img :src="v.imgurl" /></div>
         <div class="ne">{{v.title}}<br>{{v.tity}}<br>
           <span>{{v.titles}}</span></div> 
       </div> 
    </div>
    <BottomBar></BottomBar>
  </div>
</template>
<script>
 import BottomBar from "../bottombar/bottombar";
  export default {
      components:{
          BottomBar
      },
       data(){
        return{
          arr:[
            {
               title:"iphone11 (A2223)双卡公开4G手机",titles:"￥5399",imgurl:require("../../assets/may/x-1.jpg")
            },
             {
               title:"iphone11 Pro Max(A2220)双卡公开4G手机",titles:"￥9499",imgurl:require("../../assets/may/x-2.jpg")
            },
             {
              title:"vivo iQOO Pro 5G版全网通智能手机",tity:"购机享大礼包",titles:"￥3698",imgurl:require("../../assets/may/x-3.jpg")
            },
             {
              title:"华为Mate20 X5G版 256G公共版智能手机",titles:"￥6398",imgurl:require("../../assets/may/x-4.jpg")
            },
             {
              title:"华为 P30 8+64GB/8+128G 移动版4G手机",titles:"￥3388",imgurl:require("../../assets/may/x-5.jpg")
            }  
          ]
        }   
      }
  }
</script>
   
<style>
  .item{
      width:100%; 
      padding-left:0.1rem; 
    }
    .hen{
      width:100%;
      display:flex; 
      flex-wrap: wrap;
      height: 0.75rem;
      width: 100%;
      border: 0.01rem solid whitesmoke;
      margin-bottom: 0.3rem;
    }
     .ve{
      width: 0.75rem;
      height: 0.75rem;  
    }
    .ve img{ 
      width: 100%;
      height: 0.75rem;
    }
    .ne{
      font-size: 0.14rem;
      width:60%;
      height:0.75rem;
      padding-left: 0.2rem;
      padding-top: 0.3rem;  
    }
</style>

