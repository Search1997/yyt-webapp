import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import Discounts from '../pages/discounts'
import My from '../pages/my'
import Nav from '../pages/nav'
import Erdianshi from '../components/erpage/erdianshi'
import Erdianying from '../components/erpage/Erdianying'
import Erzongyi from '../components/erpage/Erzongyi'
import Ershaixuan from '../components/erpage/Ershaixuan'
import Buyphone from '../pages/Buyphone'
import Zonghe from '../components/elect/zonghe'
import Shaixuan from '../components/elect/shaixuan'
import Jiage from '../components/elect/jiage'
import Xiaoliang from '../components/elect/xiaoliang'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component:Home   
    },
    {
      path: '/discounts',
      name: 'Discounts',
      component: Discounts
    },
     {
      path: '/buyphone',
      name: 'Buyphone',
      component:Buyphone,
      children:[
        {name:"Zonghe",path:"zonghe",component:Zonghe},
        {name:"Xiaoliang",path:"xiaoliang",component:Xiaoliang},
        {name:"Jiage",path:"jiage",component:Jiage},
        {name:"Shaixuan",path:"shaixuan",component:Shaixuan}
      ]
    },
     {
      path: '/my',
      name: 'My',
      component: My,
      meta:{
        navShow:true,
      }
    },
    {
      path: '/nav',
      name: 'Nav',
      component: Nav,
      children:[
        {name:"Erdianshi",path:"erdianshi",component:Erdianshi},
        {name:"Erdianying",path:"erdianying",component:Erdianying},
        {name:"Erzongyi",path:"erzongyi",component:Erzongyi},
        {name:"Ershaixuan",path:"ershaixuan",component:Ershaixuan}
      ]
    },
    {
      path:'/*',
      redirect:'/home'
    }
  ]
})
