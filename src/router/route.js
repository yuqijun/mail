// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
// eslint-disable-next-line no-unused-vars
import VueRouter from 'vue-router'

// 导入要渲染的组件
import  foo  from '../components/foo/foo.vue'

import bar from '../components/bar/bar.vue'

import list from '../components/list/list.vue'

import add from '../components/list/add.vue'

// eslint-disable-next-line no-unused-vars
import edit from '../components/list/edit.vue'

// eslint-disable-next-line no-unused-vars
import login from '../components/login/login.vue'

// eslint-disable-next-line no-unused-vars
import register from '../components/regist/regist.vue'

// eslint-disable-next-line no-unused-vars
import header from '../components/header/header.vue'

// eslint-disable-next-line no-unused-vars
import uploadavatar from '../components/common/upload.vue'
import home from '../components/home/home.vue'
import payMent from '../components/payMent/payMent.vue'
import orderList from '../components/orderList/orderList.vue'
import productOrder from '../components/common/productOrder.vue'
import business  from '../components/business/business.vue'
import businessSlider from '../components/business/businessSlider.vue'
import businessGoods from '../components/business/businessGoods.vue'
import productList from '../components/productList/foodList.vue'
import pList from '../components/productList/pList.vue'
//商户中心
import businessCenter from '../components/businessCenter/businessCenter.vue'
import bc_productManeger from '../components/businessCenter/maneger/productManeger.vue'
import  bc_orderManeger from '../components/businessCenter/maneger/orderManeger.vue'
Vue.use(VueRouter)

// eslint-disable-next-line no-unused-vars
var routes = [
  // {name: 'foo', path: '/foo', component: foo},
  {name: 'bar', path: '/bar', component: bar},
  {name: 'list', path: '/list', component: list},
  {name: 'add', path: '/add', component: add},
  {name: 'edit', path: '/edit', component: edit},
  {name: 'login', path: '/login', component: login},
  {name: 'register', path: '/register', component: register},
  {
    name: 'header',
    path: '/header',
    component: header
  },
  {name: 'uploadavatar', path: '/uploadavatar', component: uploadavatar},


  {
    name: 'home',
    path: '/home',
    component: home,
    children: [
      {
        path: 'productList:num' ,//以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
        name: 'productList',
        component: productList
      },
      {
        path: 'foo',
        name: 'foo',
        component: foo
      },
      {
        path:'pList',
        name:'pList',
        component:pList
      }
    ],
    redirect:'home/productList4'
  },


  {name:"payMent",path:"/payMent",component:payMent},
  {name:'orderList',path:'/orderList',component:orderList},
  {name:'productOrder',path:'/productOrder',component:productOrder},
  {name:"business",path:'/business',component:business},
  {name:'businessSlider',path:'/businessSlider',component:businessSlider},
  {name:'businessGoods',path:'/businessGoods',component:businessGoods},
  {naem:"productList",path:'/productList',component: productList},

  {
    name:"businessCenter",
    path:'/businessCenter',
    component:businessCenter,
    children:[
      {
        name:"bc_productManeger",
        path:"/productManeger",
        component:bc_productManeger
      },
      {
        name:"bc_orderManeger",
        path:"/orderManeger",
        component:bc_orderManeger
      }
    ],
    redirect:'/orderManeger'
  }
];

// eslint-disable-next-line no-unused-vars
var router = new VueRouter({routes})

export default router
