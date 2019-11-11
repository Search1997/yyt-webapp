<template>
  <div class="bottombar">
     <router-link to="/home"><img src="../../assets/may/00f1.png"><p>主页</p> </router-link>
     <router-link to="/nav/erdianshi"><img src="../../assets/may/017a.png"><p>商城</p></router-link>
     <router-link to="/discounts"><img src="../../assets/may/z6.png"><P>优惠</p> </router-link>
     <router-link to="/my"><img src="../../assets/may/810vs.png"><p>我的</p></router-link>
  </div>
</template>
<script>
  export default {
  
  }
</script>
<style scoped>
a{
   font-size: 0.16rem;
   flex:1;
   text-align: center;
   text-decoration: none;
   color: rgb(51,51,51);
}
.bottombar{
  display: flex;
	position: fixed;
	left: 0;
	bottom: 0;
	box-sizing: border-box;
	height: 0.7rem;
	background: whitesmoke;
	width: 100%;
  padding-top: 0.1rem;
}
.bottombar img{
  width: 0.3rem;
  height: 0.3rem;
}

</style>
