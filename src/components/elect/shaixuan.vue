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
               title:"华为P30 8+64G/8+128G 移动版4G手机",titles:"￥3388",imgurl:"../../assets/may/m-1.jpg"
            },
             {
               title:"华为畅享9s 4GB+128GB 移动版4G手机",tity:"领优惠下单立减200元",titles:"￥1299",imgurl:"../../assets/may/m-2.jpg"
            },
             {
              title:"【双十一优惠】华为p30 Pro 移动版 4G智能手机",tity:"领优惠下单立减400元",titles:"￥1299",imgurl:"../../assets/may/m-3.jpg"
            },
             {
              title:"【双十一优惠】小米9 8GB+128GB 移动版 4G智能手机",titles:"￥1299",imgurl:"../../assets/may/m-4.jpg"
            },
             {
              title:"华为 畅享Max 4GB+128GB 移动版4G手机",titles:"￥1555",imgurl:"../../assets/may/m-5.jpg"
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
