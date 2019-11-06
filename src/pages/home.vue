<template>
  <div>
    <Top></Top>
    <div class="on">
   
    <div class="lunbo">

    </div>
     <!-- <router-link to="/buyphone">买手机</router-link> -->
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
      全家享
    </div>
    <div class="but">
      <div class="but-q"><img src="../../static/nav/n-11.png" alt=""></div>
      <div class="but-a"><img src="../../static/nav/n-10.png" alt=""></div>
    </div>
    </div>
    <BottomBar></BottomBar>
  </div>
</template>
<script>
  import Top from "../components/bottombar/top";
  import BottomBar from "../components/bottombar/bottombar";
  export default {
      components:{
          BottomBar,
          Top
      },data(){
        return{
          arr:[
            {
              title:"话费充值",imgurl:"../../static/home/b-1.png"
            },
             {
              title:"流量充值",imgurl:"../../static/home/b-2.png"
            },
             {
              title:"账单查询",imgurl:"../../static/home/b-3.png"
            },
             {
              title:"套餐余量",imgurl:"../../static/home/b-4.png"
            },
             {
              title:"已定业务",imgurl:"../../static/home/b-5.png"
            },
             {
              title:"国漫专区",imgurl:"../../static/home/c-1.png"
            },
             {
              title:"5G专区",imgurl:"../../static/home/c-2.png"
            },
             {
              title:"买手机",imgurl:"../../static/home/c-3.png"
            },
             {
              title:"办业务",imgurl:"../../static/home/c-4.png"
            },
             {
              title:"办号卡",imgurl:"../../static/home/c-5.png"
            }
          ]
        }
      }
  }
</script>
<style scoped>
    .on{
      margin-top: 0.83rem;
      font-size: 0.18rem;
    }
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
      width:20%;
    }
    .lunbo{
      width: 100%;
      height:1.2rem;
      background-color: blueviolet;
    }
     .photo{
     width: 100%;
     height: 0.7rem;
     padding-top: 0.03rem;
   }
   .photo img{
     width: 100%;
     height: 0.67rem;
   }
   .xiang{
     width: 100%;
     height: 0.5rem;
     background-color: aliceblue;
     font-size: 0.2rem;
     color:green;
     text-align: center;
     line-height: 0.5rem;
   }
   .but{
     display: flex;
       flex-direction: row;
   }
   .but-q,.but-a{
     border: 1px solid lightgray;
     height: 1.2rem;
   }
   .but-q img{
     width: 100%;
     height: 1.2rem;
   }
    .but-a img{
     width: 100%;
     height: 1.2rem;
   }
</style>


   
