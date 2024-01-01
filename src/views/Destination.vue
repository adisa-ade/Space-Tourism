<script setup>
    import Nav from '@/components/Nav.vue';
    import planets from '../data/data.json'
</script>
<template>
    <body class="min-h-screen scroll-smooth text-slate-300 font-mono pb-4">
        <Nav/>        
        <div class="flex flex-col items-center">          
          <div>
            <h1 class="text-lg font-bold">01 PICK YOUR DESTINATION</h1>
            <img src="" alt="">
          </div>
          <div>
            <h1 v-for="planet in planets">{{planet.map( planet => planet)}}</h1>
          </div>
        </div>
    </body>
</template>
<style scoped>
@media screen and (max-width: 767px) {
    body{
      background-image: url('../assets/destination/background-destination-mobile.jpg');
      background-size: cover;
      background-repeat: no-repeat;    
    }  
  }
  @media screen and (min-width:768px) and (max-width: 1023px) {
    body{
      background-image: url('../assets/destination/background-destination-tablet.jpg');
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
  @media screen and (min-width: 1024px) {
    body{
      background-image: url('@/assets/destination/background-destination-desktop.jpg');
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
</style>