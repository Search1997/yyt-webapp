<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
//  export default {
//       components:{
//           BottomBar,
//           Top
//       },data(){
//         return{
//           arr:[
//             {
//               title:"话费充值",imgurl:"../../static/home/b-1.png"
//             },
//              {
//               title:"流量充值",imgurl:"../../static/home/b-2.png"
//             },
//              {
//               title:"账单查询",imgurl:"../../static/home/b-3.png"
//             },
//              {
//               title:"套餐余量",imgurl:"../../static/home/b-4.png"
//             },
//              {
//               title:"已定业务",imgurl:"../../static/home/b-5.png"
//             },
//              {
//               title:"国漫专区",imgurl:"../../static/home/c-1.png"
//             },
//              {
//               title:"5G专区",imgurl:"../../static/home/c-2.png"
//             },
//              {
//               title:"买手机",imgurl:"../../static/home/c-3.png"
//             },
//              {
//               title:"办业务",imgurl:"../../static/home/c-4.png"
//             },
//              {
//               title:"办号卡",imgurl:"../../static/home/c-5.png"
//             }
//           ]
//         }
//       }
//   }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
