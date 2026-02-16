import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import NewsSection from "../components/cards/NewsSection.vue";
import NewsView from "../views/NewsView.vue";
import About from "../components/home/About.vue";
import AuthView from "../views/AuthView.vue";

const routes=[
    {
        path:'/',
        name:'Home',
        component:Home
    },
    {
        path:'/login',
        name:'Login',
        component:AuthView
    },
    {
        path:'/register',
        name:'Register',
        component:AuthView
    }
]

const router= createRouter({
  history: createWebHistory(),
  routes
})

export default router;