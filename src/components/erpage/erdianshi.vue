<template>
  <div>  
      <div class="lunbo">
      <Lbooa></Lbooa>
    </div>
    <div class="item">
      <div v-for="(v,i) in arr" :key="i">
        <img v-bind:src="v.imgurl" />
        <br>
        <span>{{v.title}}</span>
      </div>
    </div>
    <BottomBar></BottomBar>
  </div>
</template>
<script>
 import BottomBar from "../bottombar/bottombar";
 import Lbooa from "../lunboo/lbooa";
  export default {
      components:{
          BottomBar,
          Lbooa
      },data(){
        return{
          arr:[
            {
              title:"充值交费",imgurl:require('../../assets/nav/n-1.png')
            },
             {
              title:"我的账单",imgurl:require('../../assets/nav/n-2.png')
            },
             {
              title:"套餐余量",imgurl:require('../../assets/nav/n-3.png')
            },
             {
              title:"已定业务",imgurl:require('../../assets/nav/n-4.png')
            },
             {
              title:"充流量",imgurl:require('../../assets/nav/n-5.png')
            },
             {
              title:"办业务",imgurl:require('../../assets/nav/n-6.png')
            },
             {
              title:"个人中心",imgurl:require('../../assets/nav/n-7.png')
            },
             {
              title:"优惠专区",imgurl:require('../../assets/nav/n-8.png')
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
      padding-left: 0.1rem;
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
      .lunbo{
      width: 100%;
      height:1.4rem;
    }
</style>
