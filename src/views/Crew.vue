<script setup>
import { ref, watch, onMounted } from 'vue'
import Nav from '@/components/Nav.vue'
import data from '../data/data.json'
import { useRoute } from 'vue-router'
import DouglasHurleyImg from '../assets/crew/image-douglas-hurley.png'
import MarkShuttleworthImg from '../assets/crew/image-mark-shuttleworth.png'
import VictorGloverImg from '../assets/crew/image-victor-glover.png'
import AnoushehAnsariImg from '../assets/crew/image-anousheh-ansari.png'

const route = useRoute()
const currentCrew = ref({
  name: 'Douglas Hurley',
  images: {
    png: '../assets/crew/image-douglas-hurley.png'
  },
  bio: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
});

const imageMap = {
  'Douglas Hurley': DouglasHurleyImg,
  'Mark Shuttleworth': MarkShuttleworthImg,
  'Victor Glover': VictorGloverImg,
  'Anousheh Ansari': AnoushehAnsariImg,
}
const imageUrl = ref(DouglasHurleyImg)

const updateImage = () => {
  const urlParts = route.path.split('/')  
  const lastPart = urlParts.slice(-1).toString()  
  imageUrl.value = imageMap[lastPart]
}

watch(() => route.path, updateImage, { immediate: true })
const updateCrew = () => {
  const crewName = route.params.name
  currentCrew.value = data.crew.find(crew => crew.name === crewName)
}

watch(() => route.params.name, updateCrew)
onMounted(updateCrew)
</script>
<template>  
    <body class="min-h-screen scroll-smooth text-slate-300 font-mono pb-4 z-0">
        <Nav/>           
        <div class="flex flex-col md:flex-row md:justify-between md:items-center p-4 md:p-8 z-0 ani">          
          <div class="flex flex-col items-center md:items-start space-y-8">
            <h1 class="text-lg font-bold md:text-4xl">02 MEET YOUR CREW</h1>              
            <img :src="imageUrl" alt="" class="w-11/12">
          </div>          
          <div class="mt-8 md:w-2/4">
             <div class="flex justify-center md:justify-normal space-x-3">
              <router-link to="/crew/Douglas Hurley" class="w-7 h-7 bg-gray-500 rounded-full hover:bg-gray-400 focus:bg-white"></router-link>
              <router-link to="/crew/Mark Shuttleworth" class="w-7 h-7 bg-gray-500 rounded-full hover:bg-gray-400 focus:bg-white"></router-link>
              <router-link to="/crew/Victor Glover" class="w-7 h-7 bg-gray-500 rounded-full hover:bg-gray-400 focus:bg-white"></router-link>
              <router-link to="/crew/Anousheh Ansari" class="w-7 h-7 bg-gray-500 rounded-full hover:bg-gray-400 focus:bg-white"></router-link>
            </div>
            <div class="flex flex-col items-center md:items-start mt-8 space-y-4">
              <p class="text-xl  text-center md:text-left uppercase">{{ currentCrew.role}}</p>                    
          <h2 class="text-4xl uppercase text-center md:text-left">{{ currentCrew.name}}</h2>
          <p class="text-lg text-center md:text-left">{{ currentCrew.bio }}</p>                    
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
