<script setup>
    import {RouterLink} from 'vue-router'    
    import {ref} from 'vue'
    const showNavBar = ref(true)
</script>
<template>
    <header class="flex justify-between items-center p-6">
        <img src="../assets/shared/logo.svg" alt="">
        <div class="mobile-toggle z-50">               
        <img v-if="showNavBar" @click="showNavBar = false" src="../assets/shared/icon-hamburger.svg" alt="">
        <img v-if="!showNavBar" :style="{display:'block'}" @click="showNavBar = true" class="hidden close" src="../assets/shared/icon-close.svg" alt="">
        </div>
        <div class="desktop-nav flex gap-6 p-6 m-0">
            <RouterLink to="/" class="text-lg font-bold hover:border-b-2 hover:border-gray-500">00 HOME</RouterLink>
            <RouterLink to="/destination/Moon" class="text-lg font-bold hover:border-b-2 hover:border-gray-500">01 DESTINATION</RouterLink>
            <RouterLink to="/crew/Douglas Hurley" class="text-lg font-bold hover:border-b-2 hover:border-gray-500">02 CREW</RouterLink>
            <RouterLink to="/technology" class="text-lg font-bold hover:border-b-2 hover:border-gray-500">03 TECHNOLOGY</RouterLink>
            </div>
    </header>
    <nav>
        <div v-if="!showNavBar" :style="{display:'flex'}" class="mobile-nav hidden flex-col bg-gradient-to-b from-gray-800 to-gray-300 py-20 px-10 space-y-10 w-3/4 h-screen fixed top-0 right-0 z-10">
        <RouterLink to="/" class="text-lg font-bold">00 HOME</RouterLink>
        <RouterLink to="/destination/Moon" class="text-lg font-bold">01 DESTINATION</RouterLink>
        <RouterLink to="/crew/Douglas Hurley" class="text-lg font-bold">02 CREW</RouterLink>
        <RouterLink to="technology" class="text-lg font-bold">03 TECHNOLOGY</RouterLink>
        </div>        
    </nav>    
</template>
<style scoped>
@media screen and (max-width: 767px) {
    .desktop-nav{
        display: none;
    }
    .close, .mobile-nav{
        animation: smooth 0.4s ease-in;
    }
    @keyframes smooth {
        0%{
            opacity: 0;            
        }
        100%{
            opacity: 1;        
        }        
    }
}
@media screen and (min-width: 768px) {
    .mobile-toggle,.mobile-nav{
        display: none;
    }
    .desktop-nav{
        background-color: #292e3a;        
    }
}
</style>