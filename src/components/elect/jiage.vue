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
               title:"【全额预售】三星Galaxy Fold 折叠屏 公开屏4G手机",titles:"￥15999",imgurl:"../../static/may/j-1.jpg"
            },
             {
               title:"【双十一优惠】 iphone11Pro Max(A220)公开版",tity:"领优惠下单立减500元",titles:"￥9599",imgurl:"../../static/may/j-2.jpg"
            },
             {
              title:"iPhone11 Pro Max（A2220)双卡公开版4G手机",titles:"￥1299",imgurl:"../../static/may/j-3.jpg"
            },
             {
              title:"FlexPai柔派 RY12-6+128G 可折叠手机",titles:"￥8699",imgurl:"../../static/may/j-4.jpg"
            },
             {
              title:"三星Galaxy Note10+5G手机 12+256G公开版",tity:"领优惠下单立减500元",titles:"￥1555",imgurl:"../../static/may/j-5.jpg"
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
