<template>
 
  <div>
    <v-app>
    <Header />
    <carousel />
    </v-app>

  </div>
</template>

<script>
import Carousel from '../components/carousel.vue';
import Header from '../components/Header.vue';



export default {
  name: "Home",

  components: {
    Carousel,
    Header
 
   
  },
};
</script>
