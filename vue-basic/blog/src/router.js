import { createWebHistory, createRouter } from "vue-router";
import Article from "./components/Article.vue"
import Home from './components/Home.vue'
import Detail from './components/Detail.vue'
const routes = [
  { 
    path : "/",
    component : Home
  },
  {
    path: "/list",
    component: Article,
  },
  {
    path: "/detail",
    component : Detail,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 