import { createRouter, createWebHistory } from "vue-router";
import HomeViewVue from "@/views/HomeView.vue";
import Destination from "@/views/Destination.vue";
import Crew from "@/views/Crew.vue";
import Technology from "@/views/Technology.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[{
        path: '/',
        name: 'home',
        component:HomeViewVue
    },
    {
        path:'/destination/:name',    
        name: 'destination',
        component: Destination
    },
    {
        path:'/crew/:name',    
        name: 'crew',
        component: Crew,        
    },
    {
        path:'/technology/:name',    
        name: 'technology',
        component: Technology
    },
    ]
})
export default router