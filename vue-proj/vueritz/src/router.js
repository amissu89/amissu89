import { createWebHistory, createRouter } from "vue-router";
import Home from './components/Home.vue'
import DirectTrade from './components/sub-menu/DirectTrade.vue'
import TeamMember from './components/sub-menu/TeamMember.vue'
import Coffee from './components/sub-menu/Coffee.vue'
import Goods from './components/sub-menu/Goods.vue'
import Gifts from './components/sub-menu/Gifts.vue'
import CoffeeClub from './components/menu/CoffeeClub.vue'


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
    path: "/about/direct-trade",
    component: DirectTrade,
  },
  {
    path: "/about/team-member",
    component: TeamMember,
  },
  {
    path: "/shop/coffee",
    component: Coffee,
  },
  {
    path: "/shop/goods",
    component: Goods,
  },
  {
    path: "/shop/gifts",
    component: Gifts,
  },
  {
    path: "/coffee-club",
    component: CoffeeClub,
  },
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 