import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import NewsSection from "../components/cards/NewsSection.vue";
import NewsView from "../views/NewsView.vue";
import About from "../components/home/About.vue";

const routes=[
    {
        path:'/',
        name:'Home',
        component:Home
    },
    {
        path:'/about',
        name:'About',
        component:About
    },
    {
        path:'/news',
        name:'News',
        component:NewsView
    }
]

const router= createRouter({
  history: createWebHistory(),
  routes
})

export default router;