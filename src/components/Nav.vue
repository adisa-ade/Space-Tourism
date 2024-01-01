<script setup>
    import {RouterLink} from 'vue-router'
</script>
<template>
    <header class="flex justify-between items-center p-6">
        <img src="../assets/shared/logo.svg" alt="">
        <div class="mobile-toggle">
        <img src="../assets/shared/icon-hamburger.svg" alt="">
        <img class="hidden" src="../assets/shared/icon-close.svg" alt="">
        </div>
        <div class="desktop-nav flex gap-6 bg-gradient-to-b from-gray-500 to-gray-200 p-6 opacity-90">
            <RouterLink to="" class="text-lg font-bold">00 HOME</RouterLink>
            <RouterLink to="" class="text-lg font-bold">01 DESTINATION</RouterLink>
            <RouterLink to="" class="text-lg font-bold">02 CREW</RouterLink>
            <RouterLink to="" class="text-lg font-bold">03 TECHNOLOGY</RouterLink>
            </div>
    </header>
    <nav>
        <div  class="mobile-nav flex flex-col bg-gradient-to-b from-gray-800 to-gray-300 py-20 px-10 space-y-10 w-3/4 h-screen absolute top-0 right-0">
        <RouterLink to="" class="text-lg font-bold">00 HOME</RouterLink>
        <RouterLink to="" class="text-lg font-bold">01 DESTINATION</RouterLink>
        <RouterLink to="" class="text-lg font-bold">02 CREW</RouterLink>
        <RouterLink to="" class="text-lg font-bold">03 TECHNOLOGY</RouterLink>
        </div>        
    </nav>
</template>
<style scoped>
@media screen and (max-width: 767px) {
    .desktop-nav{
        display: none;
    }
}
@media screen and (min-width: 768px) {
    .mobile-toggle,.mobile-nav{
        display: none;
    }
}
</style>