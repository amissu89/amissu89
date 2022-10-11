import { createWebHistory, createRouter } from "vue-router";
import Article from "./components/Article.vue"
import Home from './components/Home.vue'
import Detail from './components/Detail.vue'
import NotFound from './components/NotFound.vue'
import Author from './components/Detail/Author.vue'
import Comment from './components/Detail/Comment.vue'
const routes = [
  { 
    path : "/",
    component : Home
  },
  { 
    path : "/home",
    component : Home
  },
  {
    path: "/list",
    component: Article,
  },
  {
    // 정규식도 가능. 아래는 숫자만 받게
    // /:id* : id를 계속 반복해라~
    path: "/detail/:id(\\d+)",
    component : Detail,
    //nested router
    children : [ 
      {
        path : 'author', //"/부터 적으면 홈페이지 기준이므로, 상대경로인 이름만 적어주기"
        component : Author,
      },
      {
        path : 'comment',
        component : Comment,
      }
    ]
  },
  {
    //같은 route에 걸리면 위에것에 먼저 걸림
    path : '/:anything(.*)',
    component : NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 