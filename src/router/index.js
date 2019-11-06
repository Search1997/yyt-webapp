import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import Discounts from '../pages/discounts'
import My from '../pages/my'
import Nav from '../pages/nav'
import Erdianshi from '../pages/erdianshi'
import Erdianying from '../pages/Erdianying'
import Erzongyi from '../pages/Erzongyi'
import Ershaixuan from '../pages/Ershaixuan'
import Buyphone from '../pages/Buyphone'
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
      component:Buyphone
    },
    {
      path: '/my',
      name: 'My',
      component: My
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
