<script setup>
import { ref, watch, onMounted } from 'vue'
import Nav from '@/components/Nav.vue'
import data from '../data/data.json'
import { useRoute } from 'vue-router'
import MoonImg from '../assets/destination/image-moon.png'
import MarsImg from '../assets/destination/image-mars.png'
import EuropaImg from '../assets/destination/image-europa.png'
import TitanImg from '../assets/destination/image-titan.png'

const route = useRoute()
const currentDestination = ref({
  name: 'Moon',
  images: {
    png: '../assets/destination/image-moon.png',
    webp: '../assets/destination/image-moon.webp',
  },
  description: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
  distance: '384,400 km',
  travel: '3 days',
});

const imageMap = {
  'Moon': MoonImg,
  'Mars': MarsImg,
  'Europa': EuropaImg,
  'Titan': TitanImg,
}
const imageUrl = ref(MoonImg)

const updateImage = () => {
  const urlParts = route.path.split('/')  
  const lastPart = urlParts.slice(-1).toString()  
  imageUrl.value = imageMap[lastPart]
}

watch(() => route.path, updateImage, { immediate: true })
const updateDestination = () => {
  const destinationName = route.params.name
  currentDestination.value = data.destinations.find(dest => dest.name === destinationName)
}

watch(() => route.params.name, updateDestination)
onMounted(updateDestination)
</script>
<template>  
    <body class="min-h-screen scroll-smooth text-slate-300 font-mono pb-4">
        <Nav/>           
        <div class="flex flex-col md:flex-row md:justify-between md:items-center p-4 md:p-8 z-0 ani">          
          <div class="flex flex-col items-center md:items-start space-y-8">
            <h1 class="text-lg font-bold md:text-4xl">01 PICK YOUR DESTINATION</h1>             
            <img :src="imageUrl" alt="" class="animate w-10/12">          
          </div>          
          <div class="mt-8 md:w-2/4">
             <div class="flex justify-center md:justify-normal space-x-3">
              <router-link to="/destination/Moon" class="text-xl font-bold uppercase font-sans hover:border-b-2 hover:border-gray-400 focus:border-b-2 border-white">Moon</router-link>
              <router-link to="/destination/Mars" class="text-xl font-bold uppercase font-sans hover:border-b-2 hover:border-gray-400 focus:border-b-2 border-white">Mars</router-link>
              <router-link to="/destination/Europa" class="text-xl font-bold uppercase font-sans hover:border-b-2 hover:border-gray-400 focus:border-b-2 border-white">Europa</router-link>
              <router-link to="/destination/Titan" class="text-xl font-bold uppercase font-sans hover:border-b-2 hover:border-gray-400 focus:border-b-2 border-white">Titan</router-link>
            </div>
            <div class="flex flex-col items-center md:items-start mt-8 space-y-4">
          <h2 class="text-6xl uppercase">{{ currentDestination.name }}</h2>
          <p class="text-sm md:text-lg text-center md:text-left">{{currentDestination.description}}</p>          
          <div class="space-y-8 text-center md:text-left md:flex md:items-center md:space-y-0 md:gap-x-8 lg:gap-x-20">
            <div>
              <p class="text-2xl md:text-lg lg:text-2xl font-medium uppercase text-slate-500">Avg. Distance</p>
              <p class="text-4xl md:text-lg lg:text-3xl uppercase">{{ currentDestination.distance }}</p>
            </div>

            <div>
              <p class="text-2xl md:text-sm lg:text-2xl font-medium uppercase text-slate-500">Est. Travel Time</p>
              <p class="text-4xl md:text-lg lg:text-3xl uppercase">{{ currentDestination.travel }}</p>
            </div>
          </div>
        </div>
        </div>
      </div> 
    </body>
</template>
<style scoped>
.animate{  
  animation: rotate 80s linear infinite;
}
@keyframes rotate {
  from{
    transform: rotate(0);    
  }
  to{
    transform: rotate(360deg);    
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