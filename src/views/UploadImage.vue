<template>
<div>
  <v-app>
 <Header />
   
    <imageUploader />
 
  </v-app>
</div>
  
</template>
<script>

import imageUploader from '../components/imageUploader.vue';
import Header from '../components/Header.vue';
export default {
  name:"UploadImage",

  components:{
    imageUploader,
    Header
  },
  
}
</script>
<style scoped>
#app {
  background: url("https://images.pexels.com/photos/4199484/pexels-photo-4199484.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    no-repeat center center fixed !important;
  background-size: contain;
}


</style>
