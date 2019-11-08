<template>
  <div class="item">
      <div v-for="(v,i) in arr" :key="i">
        <img :src="v.imgurl" />
        <br>
        <span>{{v.title}}</span>
      </div>
    </div>
</template>
<script>
 export default {
      components:{
          BottomBar
      },data(){
        return{
         arr:[
            {
              title:"话费充值",imgurl:"../../assets/home/b-1.png"
            },
             {
              title:"流量充值",imgurl:"../../assets/home/b-2.png"
            },
             {
              title:"账单查询",imgurl:"../../assets/home/b-3.png"
            },
             {
              title:"套餐余量",imgurl:"../../assets/home/b-4.png"
            },
             {
              title:"已定业务",imgurl:"../../assets/home/b-5.png"
            },
             {
              title:"国漫专区",imgurl:"../../assets/home/c-1.png"
            },
             {
              title:"5G专区",imgurl:"../../assets/home/c-2.png"
            },
             {
              title:"买手机",imgurl:"../../assets/home/c-3.png"
            },
             {
              title:"办业务",imgurl:"../../assets/home/c-4.png"
            },
             {
              title:"办号卡",imgurl:"../../assets/home/c-5.png"
            }
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
      width: 0.45rem;
      height: 0.45rem;
      padding: 0.03rem;
    }
    .item span{
      font-size: 0.14rem;
    }
    .item>div{
      font-size: 0.16rem;
      width:20%;
    }
</style>
