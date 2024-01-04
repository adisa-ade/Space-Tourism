<script setup>
import { ref, watch, onMounted } from 'vue'
import Nav from '@/components/Nav.vue'
import data from '../data/data.json'
import { useRoute } from 'vue-router'
import LaunchVehicleImg from '../assets/technology/image-launch-vehicle-portrait.jpg'
import spaceportImg from '../assets/technology/image-spaceport-portrait.jpg'
import spaceCapsuleImg from '../assets/technology/image-space-capsule-portrait.jpg'

const route = useRoute()
const currentTechnology = ref({
  name: 'Launch vehicle',
  images: {
    png: '../assets/technology/image-launch-vehicle-portrait.jpg'
  },
  description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
});

const imageMap = {
  'Launch vehicle': LaunchVehicleImg,
  'Spaceport': spaceportImg,
  'Space capsule': spaceCapsuleImg,  
}
const imageUrl = ref(LaunchVehicleImg)

const updateImage = () => {
  const urlParts = route.path.split('/')  
  const lastPart = urlParts.slice(-1).toString() 
  imageUrl.value = imageMap[lastPart]
}

watch(() => route.path, updateImage, { immediate: true })
const updateTechnology = () => {
  const TechnologyName = route.params.name  
  currentTechnology.value = data.technology.find(technology => technology.name === TechnologyName)
}

watch(() => route.params.name, updateTechnology)
onMounted(updateTechnology)
</script>
<template>  
    <body class="min-h-screen scroll-smooth text-slate-300 font-mono pb-4 z-0">
        <Nav/>           
        <div class="flex flex-col md:flex-row md:justify-between md:items-center p-4 md:p-8 z-0 ani">          
          <div class="flex flex-col items-center md:items-start space-y-8">
            <h1 class="text-lg font-bold md:text-4xl">03 SPACE LAUNCH 101</h1>              
            <img :src="imageUrl" alt="" class="w-11/12">
          </div>          
          <div class="mt-8 md:w-2/4">
             <div class="flex justify-center md:justify-normal space-x-3">
              <router-link to="/technology/Launch vehicle" class="w-14 h-14 text-xl border-2 border-gray-600 rounded-full hover:bg-gray-400 focus:bg-white flex items-center justify-center">1</router-link>
              <router-link to="/technology/Spaceport" class="w-14 h-14 text-xl border-2 border-gray-600 rounded-full hover:bg-gray-400 focus:bg-white flex items-center justify-center">2</router-link>
              <router-link to="/technology/Space capsule" class="w-14 h-14 text-xl border-2 border-gray-600 rounded-full hover:bg-gray-400 focus:bg-white flex items-center justify-center">3</router-link>              
            </div>
            <div class="flex flex-col items-center md:items-start mt-8 space-y-4">
              <p class="text-xl  text-center md:text-left uppercase">The terminology</p>                    
          <h2 class="text-4xl uppercase text-center md:text-left">{{currentTechnology.name}}</h2>
          <p class="text-lg text-center md:text-left">{{ currentTechnology.description }}</p>                    
        </div>
        </div>
      </div> 
    </body>
</template>
<style scoped>
.ani{
  animation: pulse .7s ease-in;
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
      background-image: url('../assets/crew/background-crew-mobile.jpg');
      background-size: cover;
      background-repeat: no-repeat;    
    }  
  }
  @media screen and (min-width:768px) and (max-width: 1023px) {
    body{
      background-image: url('../assets/crew/background-crew-tablet.jpg');
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
  @media screen and (min-width: 1024px) {
    body{
      background-image: url('@/assets/crew/background-crew-desktop.jpg');
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
</style>
