<template>
  <div>
    
     <div class="item">
      <div v-for="(v,i) in arr" :key="i">
        <img :src="v.imgurl" />
        <br>
        <span>{{v.title}}</span>
      </div>
    </div>
     <!-- <router-link to="/my/car">gouwuche</router-link>
          <router-view></router-view> -->
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


   