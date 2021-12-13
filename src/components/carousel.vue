<template>
<v-app>


  <div class="heroBlock">
    <v-carousel cycle hide-delimiters class="" height="91vh ">
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <v-row class="title fill-height hidden-xs-only" align="center" justify="center"><v-btn @click="imageUploader" large width="30%" outlined  color="white  darken-4 white--text">{{ item.title }}</v-btn></v-row>
      </v-carousel-item>
    </v-carousel>
  </div>
  </v-app>
</template>

<script>
export default {
  name: "Hero",
  data() {
    return {
      items: [
        {
          src: require("../assets/images/carousel.jpg"),
          title: "Get Started :)"
        },
        {
          src: require("../assets/images/carousel3.jpg"),
          title: "Upload Your images"
        },
        {
          src: require("../assets/images/carousel5.jpg"),
          title: "Share Your images"
        }
      ]
    };
  },
  methods:{
    imageUploader(){
     this.$router.push({ name: "UploadImage" });
    }
  },
};
</script>