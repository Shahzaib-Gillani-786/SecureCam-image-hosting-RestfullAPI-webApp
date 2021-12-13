<template>
  <v-app>
    
<div class="mx-auto">
  <v-card
    :loading="loading"
    class="mx-md-10 my-5"
    width="350"
  
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      cover
      :src="image.path"
    ></v-img>

    <v-card-title>{{ image.name }}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
      <div class="mb-10 mt-2 text-subtitle-1 orange--text">
         Extension • {{ image.extension }}
      </div>
      </div>

      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
    </v-card-text>

   
    <v-card-actions>
     
      <v-btn
       class="red darken-4 white--text"
       block
        text
        @click="deleteFromList(image.id)"
      >
         <v-icon left color="danger">mdi-delete</v-icon>Remove image
      </v-btn>
    </v-card-actions>
  </v-card>
      
  </div>
  </v-app>
</template>


<script>
export default {
  name: "imageCard",
  props: ["image","id"],
  
  data: () => {
    return {};
  },
  methods: {
    deleteFromList(index) {
      alert("running")
      this.image.splice(index, 1);
    }
  }
  // methods: {
  //     remove_image(){
  //         this.$store.dispatch("removeImages",this.id);
  //     },
  // },
};
</script>