import { createWebHistory, createRouter } from "vue-router";
import Home from './components/Home.vue'
import DirectTrade from './components/sub-menu/DirectTrade.vue'
import TeamMember from './components/sub-menu/TeamMember.vue'
import Coffee from './components/sub-menu/Coffee.vue'
import Goods from './components/sub-menu/Goods.vue'
import Gifts from './components/sub-menu/Gifts.vue'
import CoffeeClub from './components/menu/CoffeeClub.vue'
import AboutBlend from './components/sub-menu/AboutBlend.vue'
import Sample from './components/sub-menu/Sample.vue'
import Notice from './components/sub-menu/Notice.vue'
import Help from './components/sub-menu/Help.vue'
import Education from './components/menu/Education.vue'
import Contact from './components/menu/Contact.vue'
import Login from './components/private/Login.vue'
import MyPage from './components/private/MyPage.vue'
import Cart from './components/private/Cart.vue'

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path : "/about",
    children : [
      {
        path: "direct-trade",
        component: DirectTrade,
      },    
      {
        path: "team-member",
        component: TeamMember,
      },    
    ]
  },
  {
    path : "/shop",
    children : [
      {
        path: "coffee",
        component: Coffee,
      },
      {
        path: "goods",
        component: Goods,
      },
      {
        path: "gifts",
        component: Gifts,
      },
    ]
  },
  {
    path: "/coffee-club",
    component: CoffeeClub,
  },
  {
    path: "/whole-sale",
    children : [
      {
        path: "about-blend",
        component: AboutBlend,
      },
      {
        path: "sample",
        component: Sample,
      },
      {
        path: "notice",
        component: Notice,
      },
      {
        path: "help",
        component: Help,
      },
    ]
  },
  {
    path: "/education",
    component: Education,
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path : "/private",
    children : [
      {
        path: "login",
        component: Login,
      },
      {
        path: "my-page",
        component: MyPage,
      },
      {
        path: "cart",
        component: Cart,
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 