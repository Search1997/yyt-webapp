<template>
   <div class="itemv">
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
              title:"售罄",tity:"华为P30",imgurl:require('../../assets/home/g-1.jpg')
            },
             {
              title:"3,199元",tity:"华为Mate20",imgurl:require('../../assets/home/g-2.jpg')
            },
             {
              title:"2,799元",tity:"小米9(新版）",imgurl:require('../../assets/home/g-3.jpg')
            },
             {
              title:"售罄", tity:"小米MIX3",imgurl:require('../../assets/home/g-4.jpg')
            }  
          ]
        }   
      }
  }

</script>
<style>
 .itemv{
      width:100%;
      display:flex; 
      flex-direction: row;
      flex-wrap: wrap;
      padding-left:0.1rem;  
    }
    .itemv img{
      margin:0.1rem;
      width: 0.95rem;
      height: 1.05rem;
      padding: 0.03rem;
    }
    .itemv span{
      font-size: 0.14rem;
      color: #666666;   
     margin:0.34rem;
    }
     .itemv p{
      font-size: 0.14rem;
      color: #666666;  
      margin-left:0.23rem;  
      margin-top: 0.1rem;
    }
    .itemv>div{
      font-size: 0.16rem;
      width:50%;
         
    }
   </style>