<template>
  <div class="bottombar">
     <router-link to="/home"> home </router-link>
     <router-link to="/nav/erdianshi"> nav </router-link>
     <router-link to="/discounts"> discounts </router-link>
     <router-link to="/my"> my</router-link>
  </div>
</template>
<script>
  export default {
  
  }
</script>
<style scoped>
div{
    color:blue
}
a{
    font-size: 0.16rem;
    flex: 1;
    text-align: center;
}
.bottombar{
    position:fixed;
    bottom: 0px;
    display: flex;
    flex-direction:row;
    width: 100%; 
}
</style>
