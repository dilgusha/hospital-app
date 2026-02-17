import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes=[
    {
        path:'/',
        name:'Home',
        component:Home,
        meta: { title: 'Ana Səhifə - Referans Ambulans', description: 'Peşəkar həkim xidməti' }
    }
]

const router= createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Referans Ambulans';
  
  const descriptionTag = document.querySelector('meta[name="description"]');
  if (descriptionTag) {
    descriptionTag.setAttribute('content', to.meta.description || 'Referans Ambulans haqqında ətraflı məlumat');
  }
  
  next();
});

export default router;
