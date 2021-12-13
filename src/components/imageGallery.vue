<template>
<v-app>
  <Header />



 <v-card class="d-flex flex-row flex-wrap mx-12 " min-height=100vh width="95%">
    <imageCard
      v-for="image in images"
      :key="image.id"
      :image="image"
    />
  </v-card>
  </v-app>
</template>
<script>
import imageCard from '../components/imageCard.vue';
import Header from '../components/Header.vue';
export default {
  name: "ImageList",
  components: {
    imageCard,
    Header
  },
   data:() => {
     return{
       search:"",
     };
    },
  computed: {
    images() {
      return this.$store.state.images;
    },
    //  filteredList() {
    //   return this.images.filter(image => {
    //     return image.name.toLowerCase().includes(this.search.toLowerCase())
    //   })
    // }
  },
  mounted() {
    this.$store.dispatch("getImageList");
    this.listOfImages = JSON.parse(localStorage.getItem("all_images"));
  },
};
</script>