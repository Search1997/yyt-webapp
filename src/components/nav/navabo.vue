<template>
   <div class="itemvv">
      <div class="con" v-for="(v,i) in arr" :key="i">
        <img :src="v.imgurl" /><br>   
         <span>{{v.title}}</span><br>
         <p>{{v.tity}}</p>
       </div> 
    </div>
</template>
<script>
  export default {
      components:{
      },
       data(){
        return{
          arr:[
            {
              title:"华为Mate30...",tity:"￥4299.00",imgurl:require('../../assets/home/g-5.jpg')
            },
             {
              title:"iPhone 11 ",tity:"￥5499.00",imgurl:require('../../assets/home/g-6.jpg')
            },
             {
              title:"小米9(新版）",tity:"￥4299",imgurl:require('../../assets/home/g-3.jpg')
            },
             {
              title:"售罄", tity:"小米MIX3",imgurl:require('../../assets/home/g-8.jpg')
            }  
          ]
        }   
      }
  }

</script>
<style>
 .itemvv{
      width:100%;
      display:flex; 
      flex-direction: row;
      flex-wrap: wrap;
      padding-left:0.1rem; 
    }
    .itemvv img{
      margin:0.1rem;
      width: 1.1rem;
      height: 1.13rem;
      padding: 0.03rem;
    }
    .itemvv span{
      font-size: 0.14rem;
      color: #E40077;   
     margin:0.3rem;
    }
     .itemvv p{
      font-size: 0.14rem;
      color: #333333;  
      margin-left:0.33rem;  
      margin-top: 0.1rem;
    }
    .itemvv>div{
      font-size: 0.16rem;
      width:50%;    
    }
   </style>