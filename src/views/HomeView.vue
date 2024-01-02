<script lang="ts" setup>
    import Nav from "../components/Nav.vue"
</script>
<template>
    <body class="min-h-screen scroll-smooth text-slate-300 font-mono pb-4">
    <Nav/>
    <div class="flex flex-col md:flex-row md:text-left justify-evenly items-center text-center mt-5 md:mt-20 space-y-10 md:space-y-0 ani">
    <div class="p-4 md:p-0 md:w-2/5">
        <h1 class="text-xl md:text-3xl">
            SO, YOU WANT TO TRAVLE TO <span class="text-8xl text-white font-bold md:block">SPACE</span> 
        </h1>
        <p class="leading-8 font-serif md:leading-10 md:text-xl">Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this world experience
        </p>      
    </div>
    <div class="w-72 h-72 bg-white rounded-full flex justify-center items-center explore">
        <h1 class="text-5xl text-slate-500">EXPLORE</h1>
    </div>
    </div>    
    </body>
</template>
<style scoped>
  .explore{
    box-shadow: 2px 2px 30px 20px rgb(198, 199, 184);
    animation: pulse 12s infinite linear;           
  }
  @keyframes pulse {
    0%{
      opacity: .5;
    }
    50%{
      opacity: .2;
    }
    75%{
      opacity: 1;
    }
    100%{
      opacity: .5;
    }
  }
  .ani{
    animation: pulse 0.7s ease-in;
  }
  @keyframes pulse {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
    @media screen and (max-width: 767px) {
  body{
    background-image: url('../assets/home/background-home-mobile.jpg');
    background-size: cover;
    background-repeat: no-repeat;    
  }  
}
@media screen and (min-width:768px) and (max-width: 1023px) {
  body{
    background-image: url('../assets/home/background-home-tablet.jpg');
    background-size: cover;
    background-repeat: no-repeat;
  }
}
@media screen and (min-width: 1024px) {
  body{
    background-image: url('@/assets/home/background-home-desktop.jpg');
    background-size: cover;
    background-repeat: no-repeat;
  }
}
</style>