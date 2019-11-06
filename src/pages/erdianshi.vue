<template>
  <div>  
    你好！ 
    <div class="item">
      <div v-for="(v,i) in arr" :key="i">
        <img :src="v.imgurl" />
        <br>
        <span>{{v.title}}</span>
      </div>
    </div>
    <BottomBar></BottomBar>
  </div>
</template>
<script>
 import BottomBar from "../components/bottombar/bottombar";
  export default {
      components:{
          BottomBar
      },data(){
        return{
          arr:[
            {
              title:"充值交费",imgurl:"../../static/home/b-1.png"
            },
             {
              title:"我的账单",imgurl:"../../static/home/b-2.png"
            },
             {
              title:"套餐余量",imgurl:"../../static/home/b-3.png"
            },
             {
              title:"已定业务",imgurl:"../../static/home/b-4.png"
            },
             {
              title:"充流量",imgurl:"../../static/home/b-5.png"
            },
             {
              title:"办业务",imgurl:"../../static/home/c-1.png"
            },
             {
              title:"个人中心",imgurl:"../../static/home/c-2.png"
            },
             {
              title:"优惠专区",imgurl:"../../static/home/c-3.png"
            },
          ]
        }
      }
  }
</script>
<style scoped>
    .item{
      width:100%;
       display:flex; 
      flex-direction: row;
      flex-wrap: wrap;
    }
    .item img{
      width: 0.6rem;
      height: 0.6rem;
    }
    .item span{
      font-size: 0.16rem;
    }
    .item>div{
      font-size: 0px;
      width:25%;
    }
</style>
