<script setup>
    import Nav from '@/components/Nav.vue';
</script>
<template>
    <body class="min-h-screen scroll-smooth text-slate-300 font-mono pb-4">
        <Nav/>
    </body>
</template>
<style scoped>
@media screen and (max-width: 767px) {
    body{
      background-image: url('../assets/technology/background-technology-mobile.jpg');
      background-size: cover;
      background-repeat: no-repeat;    
    }  
  }
  @media screen and (min-width:768px) and (max-width: 1023px) {
    body{
      background-image: url('../assets/technology/background-technology-tablet.jpg');
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
  @media screen and (min-width: 1024px) {
    body{
      background-image: url('@/assets/technology/background-technology-desktop.jpg');
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
</style>