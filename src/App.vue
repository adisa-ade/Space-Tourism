<template>
  <body class="h-screen scroll-smooth">
    
  </body>
</template>
<style scoped>
@media screen and (max-width: 767px) {
  body{
    background-image: url('./assets/home/background-home-mobile.jpg');
    background-size: cover;
    background-repeat: no-repeat;
  }  
}
@media screen and (min-width:768px) and (max-width: 1023px) {
  body{
    background-image: url('./assets/home/background-home-tablet.jpg');
    background-size: cover;
    background-repeat: no-repeat;
  }
}
@media screen and (min-width: 1024px) {
  body{
    background-image: url('./assets/home/background-home-desktop.jpg');
    background-size: cover;
    background-repeat: no-repeat;
  }
}
</style>